import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
import {
  addItemToServer,
  getProductByCategory,
  getCartFromServer,
  updateItemToServer
} from '../store'
import { getASingleProduct } from '../store/product.js'

class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      singleProduct: {}
    }
  }

  async componentDidMount() {
    await this.props.getSingleProduct(this.props.match.params.id)
    this.setState({ singleProduct: this.props.singleProduct })
  }

  handleClick = async item => {
    await this.props.addToCart(this.props.userId, item)
    this.routeChange()
  }

  routeChange() {
    let path = '/cart'
    this.props.history.push(path)
  }

  render() {
    const singleProduct = this.props.singleProduct
    return (
      <ProductItem
        isLoggedIn={this.props.isLoggedIn}
        product={this.props.singleProduct}
        onClick={this.handleClick}
        key={singleProduct.id}
        props={this.props}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    singleProduct: state.product.singleProduct,
    isLoggedIn: !!state.user.id,
    userId: state.user.id,
    userCart: state.cart.userCart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: id => dispatch(getASingleProduct(id)),
    addToCart: (userId, item) => dispatch(addItemToServer(userId, item)),
    getProductByCategory: category => dispatch(getProductByCategory(category)),
    getCartFromServer: userId => dispatch(getCartFromServer(userId)),
    updateItem: (userId, item) => dispatch(updateItemToServer(userId, item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
