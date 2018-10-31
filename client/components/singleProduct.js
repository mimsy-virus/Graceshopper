import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
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

  handleChange() {}
  handleSubmit() {}

  render() {
    return (
      <ProductItem
        isLoggedIn={this.props.isLoggedIn}
        product={this.props.singleProduct}
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
    getSingleProduct: id => dispatch(getASingleProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
