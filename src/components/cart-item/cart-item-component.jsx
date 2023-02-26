import {CartItemContainer, CartItemImg, ItemDetails, CartItemName, Price} from "./cart-item-style";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <CartItemName>{name}</CartItemName>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
