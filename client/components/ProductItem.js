import React from 'react'

const ProductItem = props => {
  const { product } = props
  const { name, description, imgUrl, price, categories } = product
  return (
    <div>
      <img src={imgUrl} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>category: {categories}</p>
      </div>
      <h2>${price}</h2>
    </div>
  )
}

export default ProductItem
