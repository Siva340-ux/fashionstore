import React, { useState, useEffect } from "react";
import "./PromoBanner.css";

export default function PromoBanner() {
  const offers = [
    "✨ Flat 50% OFF on Summer Collection!",
    "🚚 Free Shipping on Orders above ₹999",
    "🔥 Buy 1 Get 1 Free on Accessories",
    "💳 Extra 10% OFF with ICICI Cards"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % offers.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <div className="promo-banner">
      <p key={current} className="fade-in">{offers[current]}</p>
    </div>
  );
}
