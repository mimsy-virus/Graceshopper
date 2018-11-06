const router = require('express').Router()
const { User } = require('../db/models')
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

router.get('/:id', isAuthenticated, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).send('Not found')
    res.json(user)
  } catch (err) {
    next(err)
  }
})
