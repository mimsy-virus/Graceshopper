import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

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
        <button
          type="button"
          value={name}
          onClick={() => props.onClick(product)}
        >
          ADD TO CART
        </button>
      )}
      {/* <h3>ADD TO CART</h3> */}
    </div>
  )
}

const mapStateToProps = state => {}

const mapProps = dispatch => {
  return {}
}

export default connect(null, mapProps)(ProductItem)
