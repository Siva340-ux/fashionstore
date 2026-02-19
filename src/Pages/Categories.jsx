import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "./Categories.css";

export default function Categories() {
  const navigate = useNavigate();
  const { setFilteredProducts, products } = useCart();

  const categories = ["Men", "Women", "Accessories"];

  const handleCategoryClick = (category) => {
    // Filter products based on category
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered); // Update filtered products in context
    navigate("/shop"); // Redirect to Shop page
  };

  return (
    <div className="categories-page">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((cat) => (
          <div
            key={cat}
            className="category-card"
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}
