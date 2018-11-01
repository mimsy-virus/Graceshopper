const router = require('express').Router()
const { Order } = require('../db/models')
const { Product } = require('../db/models')
const { OrderProduct } = require('../db/models')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.params.id,
        status: 'cart'
      }
    })
    if (!order) return res.status(404).send('Not found')

    const cartData = await OrderProduct.findAll({
      where: {
        orderId: order.id
      }
    })
    if (!cartData) return res.status(404).send('Not found')

    const cart = cartData.reduce((acc, el) => {
      acc[el.productId] = el.quantity
      return acc
    }, {})

    res.json(cart)
  } catch (err) {
    next(err)
  }
})
