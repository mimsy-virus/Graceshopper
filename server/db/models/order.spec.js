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

    it('requires status to be either pill or shot', async () => {
      //     'cart',
      //   'created',
      //   'processing',
      //   'cancelled',
      //   'completed'
      order.status = 'cart'
      await order.save()
      order.status = 'created'
      await order.save()
      order.status = 'processing'
      await order.save()
      order.status = 'cancelled'
      await order.save()
      order.status = 'completed'
      await order.save()
      try {
        order.status = 'super'
        await order.save()
        throw Error(
          'validation was successful but should have failed if status is not valid'
        )
      } catch (err) {
        expect(err.message).to.contain('invalid input value')
      }
    })
  })
})
