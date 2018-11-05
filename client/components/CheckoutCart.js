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
import CheckoutForm from './CheckoutForm'

class CheckoutCart extends React.Component {
  componentDidMount() {
    this.props.getCurrentProduct()
    this.props.getCartFromServer(this.props.userId)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.removeItemFromServer(this.props.userId, event.target.value)
  }

  render() {
    if (
      Object.keys(this.props.userCart).length > 0 &&
      this.props.productList.length > 0
    ) {
      const itemList = this.props.userCart
      const productList = this.props.productList
      return (
        <div>
          <div role="list" className="ui divided middle aligned list">
            {Object.keys(itemList).map(elem => {
              const product = productList.find(
                product => product.id === Number(elem)
              )
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
                  <img src={product.imgUrl} className="ui avatar image" />
                  <div className="content">
                    <div className="header">
                      <Link to={`/products/${elem}`}>
                        <li>{product.name}</li>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <CheckoutForm userId={this.props.userId} />
        </div>
      )
    } else return <h1>Cart is Empty!</h1>
  }
}

const mapStateToProps = state => ({
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
