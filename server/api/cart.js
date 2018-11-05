const router = require('express').Router()
const { Order } = require('../db/models')
const { Product } = require('../db/models')
const { OrderProduct } = require('../db/models')
const { isAuthenticated } = require('./apiProtection/isAuthenticated')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    if (isAuthenticated(req, userId)) {
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
    } else {
      res.status(401).send('Access Denied!')
    }
  } catch (err) {
    next(err)
  }
})

router.post('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    if (isAuthenticated(req, userId)) {
      let order = await Order.findOne({
        where: {
          userId: req.params.id,
          status: 'cart'
        }
      })

      if (!order) {
        order = await Order.create({
          status: 'cart',
          userId: req.params.id
        })
      }

      const cartData = await OrderProduct.create({
        orderId: order.id,
        productId: Object.keys(req.body)[0],
        quantity: Object.values(req.body)[0],
        price: 9.99
      })

      if (!cartData) return res.status(404).send('Not found')

      res.json({ [cartData.productId]: cartData.quantity })
    } else {
      res.status(401).send('Access Denied!')
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  console.log(req.body)
  try {
    const userId = req.params.id
    if (isAuthenticated(req, userId)) {
      const order = await Order.findOne({
        where: {
          userId: req.params.id,
          status: 'cart'
        }
      })
      if (!order) return res.status(404).send('Not found')
      const cartData = await OrderProduct.update(
        {
          quantity: Object.values(req.body)[0]
        },
        {
          where: {
            orderId: order.id,
            productId: Number(Object.keys(req.body)[0])
          }
        }
      )
      if (!cartData) return res.status(404).send('Not found')

      const itemData = await OrderProduct.findOne({
        where: {
          orderId: order.id,
          productId: Object.keys(req.body)[0]
        }
      })
      if (!itemData) return res.status(404).send('Not found')

      res.json({ [itemData.productId]: itemData.quantity })
    } else {
      res.status(401).send('Access Denied!')
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/clear/delete/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    if (isAuthenticated(req, userId)) {
      const order = await Order.findOne({
        where: {
          userId: req.params.id,
          status: 'cart'
        }
      })

      if (!order) return res.status(404).send('Not found')

      const cartData = await OrderProduct.destroy({
        where: {
          orderId: order.id
        }
      })

      if (!cartData) return res.status(404).send('Not found')
      res.json()
    } else {
      res.status(401).send('Access Denied!')
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:id/:itemId', async (req, res, next) => {
  try {
    const userId = req.params.id
    if (isAuthenticated(req, userId)) {
      const order = await Order.findOne({
        where: {
          userId: req.params.id,
          status: 'cart'
        }
      })

      if (!order) return res.status(404).send('Not found')

      const cartData = await OrderProduct.destroy({
        where: {
          orderId: order.id,
          productId: req.params.itemId
        }
      })

      if (!cartData) return res.status(404).send('Not found')
      res.json()
    } else {
      res.status(401).send('Access Denied!')
    }
  } catch (err) {
    next(err)
  }
})
