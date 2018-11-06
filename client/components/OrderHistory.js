import React from 'react'
const OrderHistory = props => {
  const { orders } = props

  return orders.map(order => {
    const { product } = order[0]
  })
}

export default OrderHistory
