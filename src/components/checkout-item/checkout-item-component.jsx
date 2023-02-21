import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton,
  Image
} from "./checkout-item-style";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { addItemToCart, removeCartItem, clearItemFromCart } =
    useContext(CartContext);
  const handleAddItem = () => addItemToCart(cartItem);
  const handleRemoveItem = () => removeCartItem(cartItem);
  const handleClearItem = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={handleRemoveItem}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddItem}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={handleClearItem}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
