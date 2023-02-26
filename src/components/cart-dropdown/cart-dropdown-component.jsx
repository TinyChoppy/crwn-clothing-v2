import Button from "../button/button-component";
import CartItem from "../cart-item/cart-item-component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown-style";

const CartDropdown = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckOut = () => {
    if (cartCount > 0) {
      navigate("/checkout");
      dispatch(setIsCartOpen(!isCartOpen));
    }
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty !</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleCheckOut}>GO TO CHECK OUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
