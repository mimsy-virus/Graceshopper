const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

router.get(
  '/',
  function(req, res, next) {
    console.log(req.user.isAdmin)
    if (req.user.isAdmin) {
      next()
    } else {
      res.status(401).send('Access Denied!')
    }
  },
  async (req, res, next) => {
    try {
      const users = await User.findAll()
      res.json(users)
    } catch (err) {
      next(err)
    }
  }
)

router.get(
  '/:id',
  function(req, res, next) {
    console.log(req.user.isAdmin)
    if (req.user.isAdmin) {
      next()
    } else {
      res.status(401).send('Access Denied!')
    }
  },
  async (req, res, next) => {
    try {
      console.log(req.user)
      const user = await User.findById(req.params.id)
      if (!user) return res.status(404).send('Not found')
      res.json(user)
    } catch (err) {
      next(err)
    }
  }
)

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    await user.update(req.body)
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

router.delete(
  '/:id',
  function(req, res, next) {
    console.log(req.user.isAdmin)
    if (req.user.isAdmin) {
      next()
    } else {
      res.status(401).send('Access Denied!')
    }
  },
  async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id)
      await user.destroy()
      res.json(user)
    } catch (err) {
      next(err)
    }
  }
)
