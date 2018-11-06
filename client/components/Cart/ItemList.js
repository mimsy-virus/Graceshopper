import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = props => {
  // console.log(`THIS IS PROPS IN ITEMLIST:${props.elem}:`, props)
  const price = Number(props.product.price)
  return (
    <div role="listitem" className="item">
      <div className="item">
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
        <img src={props.product.imgUrl} className="ui small image" />
        <div className="content">
          <div role="list" className="ui horizontal relaxted list">
            <div role="listitem" className="item">
              <Link to={`/products/${props.elem}`}>
                <h3>{props.product.name}</h3>
              </Link>
            </div>
            <div role="listitem" className="item">
              <form>
                <label>Quantity:</label>
                <input
                  value={props.quantity}
                  name={`${props.elem}`}
                  onChange={props.handleUpdate}
                  placeholder={props.quantity}
                />
              </form>
            </div>
            <div role="listitem" className="item">
              <h4>
                Price: $
                {price}
              </h4>
            </div>
            <div role="listitem" className="item">
              <h4>
                Item Total: $
                {price * props.quantity}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemList
