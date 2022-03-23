
import './Cart.css'

const Cart = ({items}) => {

  
  return (
    <div className="cart">
      <h1>Order summary</h1>
      <p>Selected Items: {items.length} </p>
      <p>Total Price: {}</p>
      <p>Total Shipping Charge: $5</p>
      <p>Tax: $114</p>
      <p>Grand Total: $1559</p>
      <div className="btn-cart-container">
        <button className="btn btn-cart btn-clear-cart">clear cart</button>
        <button className="btn btn-cart btn-review-order">review oder</button>
      </div>
    </div>
  )
}

export default Cart
