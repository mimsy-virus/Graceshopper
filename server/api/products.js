const router = require('express').Router()
const { Product } = require('../db/models')
const { ifIsAdmin } = require('./apiprotection')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({})
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).send('Not found')
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.get('/category/:category', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: { category: req.params.category }
    })
    if (!products) return res.status(404).send('Not found')
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.post('/', ifIsAdmin, async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', ifIsAdmin, async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    await product.update(req.body)
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', ifIsAdmin, async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    await product.destroy()
    res.json(product)
  } catch (err) {
    next(err)
  }
})
