const router = require('express').Router()
const { Order } = require('../db/models')
const { Product } = require('../db/models')
const { OrderProduct } = require('../db/models')
module.exports = router

// router.get('/:id', async (req, res, next) => {
//   try {
//     const cart = await Order.findOne({
//       where: {
//         userId: req.params.id,
//         status: 'cart'
//       },
//       include:
//     })

//     res.json(cart)
//     // if (!order) return res.status(404).send('Not found')
//     // const cart = await OrderProduct.findAll({
//     //   where: {
//     //     orderId: order.id
//     //   }
//     // })
//     // if (!cart) return res.status(404).send('Not found')
//     // res.json(cart)
//   } catch (err) {
//     next(err)
//   }
// })

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

router.post('/:id', async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

// await axios.get(`api/cart/${userId}`)

// await axios.post(`api/cart/${userId}`, item)
// await axios.put(
//      `api/cart/${userId}/${Object.keys(item)[0]}`,
//      item
//    )
// await axios.delete(`api/cart/${userId}`)
// = await axios.delete(`api/cart/${userId}`)
// userCart: {
//    //{item1: item qty},
//    //{item2: item qty},
//    // ...
//  }

// router.get('/category/:category', async (req, res, next) => {
//   try {
//     const products = await Product.findAll({
//       where: { category: req.params.category }
//     })
//     if (!products) return res.status(404).send('Not found')
//     res.json(products)
//   } catch (err) {
//     next(err)
//   }
// })

// router.post('/', async (req, res, next) => {
//   try {
//     const product = await Product.create(req.body)
//     res.json(product)
//   } catch (err) {
//     next(err)
//   }
// })

// router.put('/:id', async (req, res, next) => {
//   try {
//     const product = await Product.findById(req.params.id)
//     await product.update(req.body)
//     res.status(204).end()
//   } catch (err) {
//     next(err)
//   }
// })

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const product = await Product.findById(req.params.id)
//     await product.destroy()
//     res.json(product)
//   } catch (err) {
//     next(err)
//   }
// })
