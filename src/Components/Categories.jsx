import React from "react";
import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "Men",
    image: "https://th.bing.com/th/id/OIP.UoG9N1Maxc2fth5tSFgvywHaHa?w=175&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 2,
    name: "Women",
    image: "https://www.bing.com/th/id/OIP.j1yf-wWcJMmKZGeGK5dLCwHaHa?w=204&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 3,
    name: "Men Watch",
    image: "https://th.bing.com/th/id/OIP.WCYGXFEikB_qjp02rJb2nQHaHa?w=211&h=211&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 4,
    name: "Shoes",
    image: "https://i5.walmartimages.com/asr/69a1bcc4-45fc-40e6-b77a-4bbed9a7dc63.747a3580095ee87583690849bbca4f8b.jpeg",
  },
];

export default function Categories() {
  return (
    <section className="categories">
      <h2>Top Categories</h2>
      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
