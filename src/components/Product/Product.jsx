import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleAddToCart }) => {
  const { name, price, seller: manufacturer, ratings, img } = product
  return (
    <div className="product">
      <div className="upper">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h3>price : ${price}</h3>
      </div>
      <div className="lower">
        <div className="lower-info">
          <p>
            <small>Manufacturer : {manufacturer}</small>
          </p>
          <p>rating : {ratings} star</p>
        </div>
        <button
          className="btn btn-add"
          onClick={() => handleAddToCart(product)}
        >
          <span >Add to Cart</span>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  )
}

export default Product
