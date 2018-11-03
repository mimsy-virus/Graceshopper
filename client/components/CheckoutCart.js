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
<<<<<<< HEAD
  async componentDidMount() {
    await this.props.getCurrentProduct()
    this.props.getCartFromServer(this.props.userId)
  }
=======

  async componentDidMount() {
    await this.props.getCurrentProduct()
    await this.props.getCartFromServer(this.props.userId)

  
>>>>>>> master

  handleSubmit(event) {
    event.preventDefault()
    this.props.removeItemFromServer(this.props.userId, event.target.value)
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
                    onClick={this.handleSubmit.bind(this)}
                  >
                    X
                  </button>
                </div>
                <img src={product.imgUrl} className="product-img" />
                <div className="content">
                  {console.log('this is itemlist', this.props.userCart[elem])}
                  <form>
                    <label>Quantity:</label>
                    <input placeholder={this.props.userCart[elem]} />
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
    } else return <h1>Cart is Empty!</h1>
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
