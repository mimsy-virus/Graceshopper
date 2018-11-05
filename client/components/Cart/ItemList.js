import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = props => {
  // console.log(`THIS IS PROPS IN ITEMLIST:${props.elem}:`, props)
  const price = Number(props.product.price)
  return (
    <div role="listitem" className="item">
      <div className="right floated content">
        <button
          className="ui negative button"
          type="submit"
          role="button"
          value={props.elem}
          name="delete"
          onClick={props.handleRemove}
        >
          X
        </button>
      </div>
      <img src={props.product.imgUrl} className="product-img" />
      <div className="content">
        <form>
          <label>Quantity:</label>
          <input
            value={props.quantity}
            name={`${props.elem}`}
            onChange={props.handleUpdate}
            placeholder={props.quantity}
          />

          <h4>
            price: $
            {price * props.quantity}
          </h4>
        </form>
        <div className="header">
          <Link to={`/products/${props.elem}`}>
            <li>{props.product.name}</li>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemList
