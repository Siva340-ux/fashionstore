// src/Pages/CartPage.jsx
import React from "react";
import { useCart } from "../Context/CartContext";
import "./CartPage.css";

export default function CartPage() {
  const { cart, setCart } = useCart();

  // Ensure each item has a quantity
  const cartWithQuantity = cart.map((item) => ({
    ...item,
    quantity: item.quantity || 1,
  }));

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cartWithQuantity.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cartWithQuantity
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cartWithQuantity.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartWithQuantity.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Buy Now - redirect to WhatsApp
  const handleBuyNow = () => {
    if (cartWithQuantity.length === 0) return;

    let message = "Hello, I want to buy these products:\n";
    cartWithQuantity.forEach((item) => {
      message += `- ${item.name} x${item.quantity} = ₹${(
        item.price * item.quantity
      ).toFixed(2)}\n`;
    });
    message += `Total: ₹${totalPrice.toFixed(2)}`;

    const whatsappNumber = "0000000000"; // Replace with seller's number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  if (cartWithQuantity.length === 0)
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Your cart is empty.
      </h2>
    );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartWithQuantity.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
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
      <h2 className="total">Total: ₹{totalPrice.toFixed(2)}</h2>
      <button className="buy-now-btn" onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
}
