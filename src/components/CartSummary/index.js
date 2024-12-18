// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartItemsCount = cartList.length
      let total = 0

      cartList.map(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
        return total
      })

      return (
        <div className="cart-summary-container">
          <div className="orderTotal-count-of-items">
            <h1 className="order-total">
              Order Total: <span className="amount">Rs {total}/-</span>
            </h1>
            <p className="no-of-items">{cartItemsCount} Items in cart</p>
          </div>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
