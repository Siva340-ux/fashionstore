// src/Pages/Home.jsx
import React from "react";
import Hero from "../Components/Hero";
import FeaturedProducts from "../Components/FeaturedProducts";
import Categories from "../Components/Categories";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <Hero />

      {/* Featured Products Section */}
      <section className="featured-section">
        <h2>Featured Products</h2>
        <FeaturedProducts />
      </section>

      {/* Categories Preview */}
      <section className="categories-preview">
        <h2>Shop by Category</h2>
        <Categories />
      </section>

      {/* Welcome / About Section */}
      <section className="home-welcome">
        <h2>Welcome to Fashion Store</h2>
        <p>
          Fashion Store was founded in 2023 with a passion for unique and
          stylish apparel. We provide extraordinary customer support and
          carefully curated products that cater to every style. Explore our
          collections and shop your favorites today!
        </p>
      </section>
    </div>
  );
}
