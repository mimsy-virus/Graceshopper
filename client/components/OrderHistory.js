import React from 'react'
import { Link } from 'react-router-dom'
const OrderHistory = props => {
  const { orders } = props

  return orders.map(order => {
    return order.map(productInOrder => {
      const {
        id,
        name,
        descrioption,
        imgUrl,
        price,
        category,
        orderProduct
      } = productInOrder

      console.log(productInOrder)
      return (
        <div role="listitem" className="item" key={orderProduct.orderId + name}>
          <div className="item">
            <img src={imgUrl} className="ui small image" />
            <div className="content">
              <div role="list" className="ui horizontal relaxted list">
                <div role="listitem" className="item">
                  <Link to={`/products/${id}`}>
                    <h3>{name}</h3>
                  </Link>
                </div>
                <div role="listitem" className="item">
                  <h4>Quantity:{orderProduct.quantity}</h4>
                </div>
                <div role="listitem" className="item">
                  <h4>
                    price:
                    {price}
                  </h4>
                </div>
                <div role="listitem" className="item">
                  <h4>
                    Item Total: $
                    {Number(orderProduct.price) * Number(orderProduct.quantity)}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  })
}

export default OrderHistory
