import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = props => {
  const { product } = props
  const { name, description, imgUrl, price, category } = product
  return (
    <div className="product-item">
      <img src={imgUrl} />
      <div>
        <Link to={`/products/${props.product.id}`}>{name}</Link>
        <p>{description}</p>
        <p>category: {category}</p>
      </div>
      <h2>${price}</h2>
      {props.isLoggedIn && (
        <button type="button" onClick={props.onClick}>
          ADD TO CART
        </button>
      )}
      {/* <h3>ADD TO CART</h3> */}
    </div>
  )
}

export default ProductItem
