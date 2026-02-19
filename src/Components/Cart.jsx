import React, { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: "Stylish Jacket", 
      price: 499, 
      quantity: 1,
      image: "https://ae01.alicdn.com/kf/H8571a487179c40bfa431cb90be1fc772a/TONLION-Light-Blue-Men-Jean-Jacket-Long-Sleeve-Spring-Denim-Jacket-Hollow-Out-Male-Coats-Collage.jpg" 
    },
    { 
      id: 2, 
      name: "Classic Sneakers", 
      price: 599, 
      quantity: 2,
      image: "https://i.pinimg.com/736x/00/88/ca/0088ca85bfcca167413a01e4ebd77092.jpg" 
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow"
            >
              {/* Item Image */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 object-cover rounded-lg" 
              />

              {/* Item Info */}
              <div className="flex-1 px-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>

              {/* Item Total */}
              <p className="font-bold w-20 text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:underline ml-4"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart Total */}
          <div className="flex justify-between items-center border-t pt-4">
            <h3 className="text-xl font-bold">Total:</h3>
            <p className="text-xl font-bold">${total.toFixed(2)}</p>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
