import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const handleAddToCart = (product) => {
    // console.log(product.name + ' add to cart')
    // jei product tay click korlam shudhu matro oi porduct ta pacchi. ekhan theke ei data ta cart er shathe share korte parbe
    const newCart = [...cart, product]
    setCart(newCart)
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart items={cart} />
      </div>
    </div>
  )
}

export default Shop
