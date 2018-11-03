const router = require('express').Router()
const stripe = require('stripe')('sk_test_omsMneoAVGSlcUDdQqjqHpSc')
const { Order } = require('../db/models')
module.exports = router

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys

router.post('/:id', async (req, res, next) => {
  try {
    let order = await Order.findOne({
      where: {
        userId: req.params.id,
        status: 'created'
      }
    })

    if (!order) return res.status(404).send('Not found')

    const charge = await stripe.charges.create({
      amount: `${order.total}`,
      currency: 'usd',
      description: 'Example charge',
      source: req.body.stripeToken
    })

    if (!charge) return res.status(404).send('Not found')
    const processingOrder = await Order.update(
      {
        status: 'processing'
      },
      {
        where: {
          userId: req.params.id,
          status: 'created'
        }
      }
    )

    if (!processingOrder) return res.status(404).send('Not found')
  } catch (err) {
    next(err)
  }
})
