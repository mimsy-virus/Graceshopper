const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.findAll({
//       // explicitly select only the id and email fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!
//       attributes: [
//         'id',
//         'firstName',
//         'lastName',
//         'email',
//         'phone',
//         'userAddress',
//         'userCity',
//         'userState',
//         'userZipCode',
//         'isAdmin'
//       ]
//     })
//     res.json(users)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).send('Not found')
    res.json(user)
  } catch (err) {
    next(err)
  }
})

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

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    await user.destroy()
    res.json(user)
  } catch (err) {
    next(err)
  }
})
