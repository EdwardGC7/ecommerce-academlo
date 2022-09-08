import React from 'react'

const ProductPurchase = ({product}) => {
  return (
    <li className='card-purchase__item'>
      <h4 className='card-purchase__name'>{product.title}</h4>
      <div className='card-purchase__quantity'>Quantity: {product.productsInCart.quantity}</div>
      <span className='card-purchase__price'>$ {product.price}</span>

    </li>
  )
}

export default ProductPurchase