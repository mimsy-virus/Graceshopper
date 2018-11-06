import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ProductItem = props => {
  const product = props.product
  const { name, description, imgUrl, price, category } = product
  const productId = product.id
  let quantity = 1

  function handleChange(event) {
    quantity = event.target.value
  }

  return (
    <div className="product-item">
      <img className="product-image" src={imgUrl} />
      <div>
        <Link to={`/products/${props.product.id}`}>{name}</Link>
        <p>{description}</p>
        <p>category: {category}</p>
      </div>
      <h2>${price}</h2>
      {
        <div>
          <form>
            <label>Quantity:</label>
            <input type="number" onChange={handleChange} />
          </form>
          <button
            disabled={!props.isLoggedIn}
            type="button"
            value={name}
            onClick={() => props.onClick({ [productId]: quantity })}
          >
            ADD TO CART
          </button>
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => {}

const mapProps = dispatch => {
  return {}
}

export default connect(null, mapProps)(ProductItem)
