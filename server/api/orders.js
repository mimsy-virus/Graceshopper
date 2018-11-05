const router = require('express').Router()
const { Order } = require('../db/models')
const { isAutheticated } = require('./apiProtection/isAuthenticated')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({})
    res.json(orders)
  } catch (err) {
    next(err)
  }
})
router.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    if (isAutheticated(req, userId)) {
      const order = await Order.findAll({
        where: {
          userId
        }
      })
      if (!order) return res.status(404).send('Not found')
      res.json(order)
    } else {
      res.status(401).send('Access Denied!')
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    if (isAutheticated(req, userId)) {
      const order = await Order.findOne({
        where: {
          userId: req.params.id,
          status: 'cart'
        }
      })
      if (!order) return res.status(404).send('Not found')
      const udpatedOrder = order.update(req.body)
      res.json(udpatedOrder)
    } else {
      res.status(401).send('Access Denied!')
    }
  } catch (err) {
    next(err)
  }
})
