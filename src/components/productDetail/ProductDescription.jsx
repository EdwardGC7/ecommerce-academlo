import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import getConfig from '../../utils/getConfig'

const ProductDescription = ({productInfo}) => {
  const [counter, setCounter] = useState(1)

  const handleMinus = () => {
    if (counter - 1 >= 1) {
      setCounter(counter - 1)
    }
  }
  const handlePlus = () => {
    
      setCounter(counter + 1)
  }

  const handleAddCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

    const obj = {
      id: productInfo.id,
      quantity: counter
    }
    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(productInfo.id))
  }

  return (
    <section className='product-desc'>
      <h2 className='product-desc__name'>{productInfo?.title}</h2>
      <p className='product-info__description'>{productInfo?.description}</p>
      <div className="product-info_body">
        <article className="product-info__price">
          <h3 className='product-info__prince-label'></h3>
          <span className="product-info__price-value">Price $ {productInfo?.price}</span>
        </article>
        <article className='product-info__quentity'>
          <h3 className="product-info__quantity-label"></h3>
          <div className="product-info__quality">
            <button onClick={handleMinus}> - </button>
            <div className='product-info__quality--number'> {counter} </div>
            <button onClick={handlePlus}> + </button>
          </div>
        </article>
      </div>
      <div className='description-btn-container'>
       <button className='to-cart-btn' onClick={handleAddCart}> Add to cart</button>
      </div>
    </section>

  )
}

export default ProductDescription