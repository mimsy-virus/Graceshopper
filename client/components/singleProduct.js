import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
import { getASingleProduct } from '../store/product.js'
import { addItemToServer } from '../store/cart.js'

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

  handleChange() {}
  handleSubmit() {}
  handleClick = item => {
    // console.log('CLICK REGISTERED', item)
    // console.log(this.props.userId)
    this.props.addToCart(this.props.userId, item)
  }

  render() {
    return (
      <ProductItem
        isLoggedIn={this.props.isLoggedIn}
        product={this.props.singleProduct}
        onClick={this.handleClick}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    singleProduct: state.productList.singleProduct,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: id => dispatch(getASingleProduct(id)),
    addToCart: (userId, item) => dispatch(addItemToServer(userId, item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
