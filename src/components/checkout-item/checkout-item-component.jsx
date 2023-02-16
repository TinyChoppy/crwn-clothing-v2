import "./checkout-item-style.scss";
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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={handleAddItem}>
          &#10095;
        </span>
      </div>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={handleClearItem}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckOutItem;
