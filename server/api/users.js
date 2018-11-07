const router = require('express').Router()
const { User, Order, OrderProduct, Product } = require('../db/models')
const { isAuthenticated } = require('./apiProtection/isAuthenticated')
const { ifIsAdmin } = require('./apiProtection/isAdmin')

module.exports = router

router.get('/', ifIsAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: [
        'id',
        'firstName',
        'lastName',
        'email',
        'phone',
        'userAddress',
        'userCity',
        'userState',
        'userZipCode',
        'isAdmin'
      ]
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id/history', isAuthenticated, async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        userId: req.params.id,
        status: 'completed'
      }
    })

    if (!orders.length) return res.status(404).send('Not found')
    const ordersWithProducts = orders.map(order => order.getProducts())

    const resolved = await Promise.all(ordersWithProducts)
    console.log(resolved)
    res.json(resolved)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', isAuthenticated, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).send('Not found')
    res.json(user)
  } catch (err) {
    next(err)
  }
})
