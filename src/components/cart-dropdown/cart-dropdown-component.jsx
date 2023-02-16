import "./cart-dropdown-style.scss";
import Button from "../button/button-component";
import CartItem from "../cart-item/cart-item-component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, cartCount, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckOut = () => {
    if (cartCount > 0) {
      navigate('/checkout');
      setIsCartOpen(!isCartOpen)
    }
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
        <Button onClick={handleCheckOut}> GO TO CHECK OUT </Button>
    </div>
  );
};

export default CartDropdown;
