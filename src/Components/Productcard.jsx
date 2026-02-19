import React from "react";
import "./Productcard.css";

export default function ProductCard({ product, addToCart }) {
  if (!product) return null;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>₹{product.price.toFixed(2)}</p>
        <div className="buttons">
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <a
            href={`https://wa.me/7806801454?text=I'm%20interested%20in%20buying%20${encodeURIComponent(
              product.name
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="buy-now-btn"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
