import {
  addItemToCart,
  removeCartItem,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton,
  Image,
} from "./checkout-item-style";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const handleRemoveItem = () => dispatch(removeCartItem(cartItems, cartItem));
  const handleClearItem = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={handleRemoveItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddItem}>&#10095;</Arrow>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={handleClearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
