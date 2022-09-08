import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'

const ProductCartInfo = ({product, getAllProductsCart}) => {

  const handleDeleteProduct = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(() => getAllProductsCart())
      .catch(err => console.log(err))
  }

  return (
    <article className='cart__item'>
      <header className="cart__header">
      <h4 className='cart__category'>{product.brand}</h4>
      <h3 className='cart__name'>{product.title}</h3>
      </header>
      <span className="cart__quantity">Quantity: {product.productsInCart.quantity}</span>
      <footer className='cart__item-footer'>
        <p className="cart__total-number"><span className='cart__total-label'>Total: </span>$ {product.price}</p>
      <i onClick={handleDeleteProduct} className="cart__trash fa-regular fa-trash-can"></i>
      </footer>
    </article>
  )
}

export default ProductCartInfo