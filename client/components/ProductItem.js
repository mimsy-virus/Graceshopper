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
    <div>
      <div role="listitem" className="item">
        <div className="content">
          <Link to={`/products/${props.product.id}`}>
            <div role="list" className="ui horizontal relaxed list">
              <div role="listitem" className="item">
                <img src={imgUrl} className="ui small middle aligned image" />
              </div>
              <div role="listitem" className="item">
                {name}
                <div className="description">{description}</div>
              </div>
              <div role="listitem" className="item">
                <p>category: {category}</p>
              </div>
              <div role="listitem" className="item">
                <h2>${price}</h2>
              </div>
            </div>
          </Link>
        </div>
        <div role="list" className="ui middle aligned list">
          <div role="listitem" className="item">
            <div>
              <form>
                <label>Quantity:</label>
                <input type="number" onChange={handleChange} placeholder={0} />
              </form>
              <button
                className="ui button"
                role="button"
                type="button"
                value={name}
                onClick={() => props.onClick({ [productId]: quantity })}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {}

const mapProps = dispatch => {
  return {}
}

export default connect(null, mapProps)(ProductItem)
