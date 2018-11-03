const router = require('express').Router()
const stripe = require('stripe')('sk_test_ZGEpF0zpWch6FYLWY3xYMNGA')
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
    console.log('======', req.body)
    if (!order) return res.status(404).send('Not found')
    console.log('Working?????')
    let { status } = await stripe.charges.create({
      amount: `${order.total * 100}`,
      currency: 'usd',
      description: 'An example charge',
      source: req.body.id
    })

    console.log('!!!!!!' + status)
    //if (!charge) return res.status(404).send('Not found')
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
    res.json({ status })
  } catch (err) {
    next(err)
  }
})
