const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  productOrder: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  completed: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isIn: [['created', 'processing', 'shipped', 'cancelled']]
    }
  },

  shippingAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  subTotal: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0
    }
  }
})

module.exports = Order
