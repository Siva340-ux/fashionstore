import React from "react";
import "./FeaturedProducts.css";

const products = [
  {
    id: 1,
    name: "Red Dress",
    price: "₹499",
    image: "https://th.bing.com/th/id/OIP.SXe7cmg4PbQ1ZkeTiR9agAHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 2,
    name: "Blue Jacket",
    price: "₹399",
    image: "https://img.freepik.com/premium-photo/red-hoodie-with-hoodie-it_1022797-598.jpg",
  },
  {
    id: 3,
    name: "Black Shoes",
    price: "₹699",
    image: "https://th.bing.com/th/id/OIP.0WyLqGKuJCq7rH_JeImGoQHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 4,
    name: "Casual Shirt",
    price: "₹399",
    image: "https://www.theunstitchd.com/wp-content/uploads/2019/08/Classy-Printed-Shirt-Outfit-for-men.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2>Newly Sold / Featured Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
