import React from "react";
import { useCart } from "../Context/CartContext";
import ProductCard from "../Components/Productcard";
import "./Shop.css";

export default function Shop() {
  const { filteredProducts, products, addToCart } = useCart();

  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <div className="shop-grid">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
