import {CartItemContainer, CartItemImg, ItemDetails, CartItemName} from "./cart-item-style";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <CartItemName>{name}</CartItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
