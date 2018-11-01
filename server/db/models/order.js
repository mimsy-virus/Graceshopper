const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM(
      'cart',
      'created',
      'processing',
      'cancelled',
      'completed'
    ),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  shippingAddress: {
    type: Sequelize.STRING
  },
  shippingCity: {
    type: Sequelize.STRING
  },
  shippingState: {
    type: Sequelize.STRING
  },
  shippingZipCode: {
    type: Sequelize.STRING
  },
  subTotal: {
    type: Sequelize.DECIMAL(10, 2)
  },
  taxRate: {
    type: Sequelize.DECIMAL(10, 2)
  },
  total: {
    type: Sequelize.DECIMAL(10, 2)
  }
})

module.exports = Order
