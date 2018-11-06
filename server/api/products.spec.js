const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('/api/products/category/:category', () => {
    beforeEach(() => {
      return Product.create({
        name: 'testProductPill',
        description: 'can tell me it works properly',
        price: 9.99,
        quantity: 10,
        category: 'pill'
      })
    })

    it('GET api/products/category/pill', async () => {
      const res = await request(app)
        .get('/api/products/category/pill')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal('testProductPill')
    })
  })

  describe('/api/products/category/:category', () => {
    beforeEach(() => {
      return Product.create({
        name: 'testProductShot',
        description: 'can tell me it works properly',
        price: 9.99,
        quantity: 10,
        category: 'shot'
      })
    })

    it('GET api/products/category/shot', async () => {
      const res = await request(app)
        .get('/api/products/category/shot')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal('testProductShot')
    })
  })
})
