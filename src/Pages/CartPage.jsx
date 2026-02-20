import React from "react";
import { useCart } from "../Context/CartContext";

export default function CartPage() {
  const { cart, setCart } = useCart();

  const cartWithQuantity = cart.map((item) => ({
    ...item,
    quantity: item.quantity || 1,
  }));

  const increaseQty = (id) => {
    const updated = cartWithQuantity.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartWithQuantity
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updated);
  };

  const removeItem = (id) => {
    setCart(cartWithQuantity.filter((item) => item.id !== id));
  };

  const total = cartWithQuantity.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartWithQuantity.length === 0) {
    return (
      <div className="page-container">
        <h1>Your Cart</h1>
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Your Cart</h1>

      <div className="cart-list">
        {cartWithQuantity.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <div className="qty-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>

            <div className="cart-right">
              <p className="item-total">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ₹{total.toFixed(2)}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}