const { expect } = require('chai')
const Order = require('./order')

describe('Order model', () => {
  describe('Validations', () => {
    let order
    before(() => {
      order = Order.build()
    })
    it('requires status', async () => {
      try {
        await order.validate()
        throw Error(
          'validation was successful but should have failed without `status`'
        )
      } catch (err) {
        expect(err.message).to.contain('status cannot be null')
      }
    })
  })
})
