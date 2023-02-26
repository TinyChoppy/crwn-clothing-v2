import CheckOutItem from "../../components/checkout-item/checkout-item-component";
import { useSelector } from "react-redux";
import { selectCartItems, selectTotalPrice } from "../../store/cart/cart.selector";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout-style";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice)
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckOutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <Total>Total: ${totalPrice}</Total>
    </CheckoutContainer>
  );
};

export default CheckOut;
