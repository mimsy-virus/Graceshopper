import React from 'react'
import getCartFromServer from '../store/cart'
import addItemToServer from '../store/cart'
import updateItemToServer from '../store/cart'
import removeItemFromServer from '../store/cart'
import clearCartFromServer from '../store/cart'

class CheckoutCart extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     cart: {}
  //   }
  // }
}

const mapStateToProps = state => ({
  userCart: this.state.cart.userCart
})

const mapDispatchToProps = dispatch => ({
  getCartFromServer: userId => dispatch(getCartFromServer(userId)),
  addItemToServer: (userId, item) => dispatch(addItemToServer(userId, item)),
  updateItemToServer: () => dispatch(),
  removeItemFromServer: () => dispatch(),
  clearCartFromServer: () => dispatch()
})
