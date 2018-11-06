const router = require('express').Router()
const { Order } = require('../db/models')
const { isAuthenticated } = require('./apiProtection/isAuthenticated')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({})
    res.json(orders)
  } catch (err) {
    next(err)
  }
})
router.get('/:id', isAuthenticated, async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: {
        userId: req.params.id
      }
    })
    if (!order) return res.status(404).send('Not found')
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', isAuthenticated, async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.params.id,
        status: 'cart'
      }
    })
    if (!order) return res.status(404).send('Not found')
    const udpatedOrder = order.update(req.body)
    res.json(udpatedOrder)
  } catch (err) {
    next(err)
  }
})
