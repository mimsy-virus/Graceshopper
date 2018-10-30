import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewProduct } from '../store/product'
import Form from './adminForm'

const mapDispatchToProps = dispatch => {
  return {
    addNewProduct: product => {
      dispatch(addNewProduct(product))
    }
  }
}

class NewProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange(event) {
    const name = document.getElementById('new product name input')
    const description = document.getElementById('new product description input')
    const imgUrl = document.getElementById('new product imgUrl input')
    const price = document.getElementById('new product address input')
    const quantity = document.getElementById('new product address input')
    const category = document.getElementById('new product address input')
    this.setState()
  }

  handleSubmit(event) {
    event.preventDefault()
    // const newproduct = this.props.addNewproduct
    // this.props.postNewproduct(newproduct)
    this.routeChange()
  }

  routeChange() {
    let path = `/`
    this.props.history.push(path)
  }

  render() {
    return (
      <div>
        <div className="ui center aligned container">
          <h1>Add new Product:</h1>
        </div>
        <Form
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          data={this.props.addNewproduct}
          field="new product"
        />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(NewProduct)
