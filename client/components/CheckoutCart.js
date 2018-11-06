import React from 'react'
import {
  getCartFromServer,
  addItemToServer,
  updateItemToServer,
  removeItemFromServer,
  clearCartFromServer,
  getCurrentProduct
} from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CheckoutCart extends React.Component {
  async componentDidMount() {
    await this.props.getCurrentProduct()
    this.props.getCartFromServer(this.props.userId)
  }

  async handleRemove(event) {
    event.preventDefault()
    await this.props.removeItemFromServer(this.props.userId, event.target.value)
    this.componentDidMount()
  }
  async handleUpdate(event) {
    event.preventDefault()
    console.log('THIS IS EVENT', event.target.name)
    const item = Number(event.target.value)
    await this.props.updateItemToServer(this.props.userId, { 1: item })
  }

  async handleClear() {
    event.preventDefault()
    await this.props.clearCartFromServer(this.props.userId)
  }

  render() {
    // console.log('this is props:', this.props)
    if (
      this.props.userId &&
      Object.keys(this.props.userCart).length > 0 &&
      this.props.productList.length > 0
    ) {
      const itemList = this.props.userCart
      const productList = this.props.productList
      let subtotal = 0
      let curPrice = 0
      return (
        <div role="list" className="ui divided middle aligned list">
          <button type="button" onClick={this.handleClear.bind(this)}>
            CLEAR CART
          </button>
          {Object.keys(itemList).map(elem => {
            const product = productList.find(
              product => product.id === Number(elem)
            )
            curPrice = Number(product.price) * Number(this.props.userCart[elem])
            subtotal += curPrice

            return (
              <div role="listitem" className="item" key={elem}>
                <div className="right floated content">
                  <button
                    className="ui negative button"
                    type="submit"
                    role="button"
                    value={elem}
                    name="delete"
                    onClick={this.handleRemove.bind(this)}
                  >
                    X
                  </button>
                </div>
                <img src={product.imgUrl} className="product-img" />
                <div className="content">
                  <form>
                    <label>Quantity:</label>
                    <input
                      value={this.props.userCart[elem]}
                      name="update"
                      onChange={this.handleUpdate.bind(this)}
                      placeholder={this.props.userCart[elem]}
                    />

                    {/* <input type = 'number' onChange={}/> */}
                    {/* <h3>Quantity: {this.props.userCart[elem]}</h3> */}
                    <h2>
                      price:
                      {curPrice}
                    </h2>
                  </form>
                  <div className="header">
                    <Link to={`/products/${elem}`}>
                      <li>{product.name}</li>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
          <h3>SUBTOTAL : {Math.round(subtotal * 100) / 100}</h3>

          <Link to="/checkout">Click to Checkout</Link>
        </div>
      )
    } else {
      return (
        <div className="ui center aligned content">
          <h1>Cart is Empty!</h1>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  // NOT SAVING THE CART IN THE DATABASE, ITS ON THE STORE
  userCart: state.cart.userCart,
  productList: state.products.productList,
  userId: state.user.id
})

const mapDispatchToProps = dispatch => ({
  getCartFromServer: userId => dispatch(getCartFromServer(userId)),

  addItemToServer: (userId, item) => dispatch(addItemToServer(userId, item)),

  updateItemToServer: (userId, item) =>
    dispatch(updateItemToServer(userId, item)),

  removeItemFromServer: (userId, itemId) =>
    dispatch(removeItemFromServer(userId, itemId)),

  clearCartFromServer: userId => dispatch(clearCartFromServer(userId)),

  getCurrentProduct: () => dispatch(getCurrentProduct())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCart)
