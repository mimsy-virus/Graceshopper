import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          id: 1,
          name: 'drug1',
          description: 'buebttgt',
          imgUrl: 'https://i.imgur.com/wLwdnlA.jpg',
          price: 199.99,
          qty: 4,
          categories: 'pills'
        },
        {
          id: 2,
          name: 'drug2',
          description: 'ruthhrt',
          imgUrl: 'https://i.imgur.com/wLwdnlA.jpg',
          price: 219.99,
          qty: 5,
          categories: 'shots'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        {this.state.products.map(product => {
          return (
            <Link key={product.id} to={`/products/${product.id}`}>
              <ProductItem product={product} />
            </Link>
          )
        })}
      </div>
    )
  }
}

export default ProductList
