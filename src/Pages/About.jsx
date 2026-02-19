import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">About Fashion Store</h1>

      <section className="about-section">
        <p>
          Welcome to <span className="highlight">Fashion Store</span> – your one-stop destination for unique and stylish fashion items. 
          We started our journey in <strong>2020</strong> with the mission to bring extraordinary products to fashion lovers around the world.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Unique Products</h2>
        <p>
          We curate an exclusive collection of clothing, accessories, and lifestyle products that you won't find anywhere else. 
          Each item is carefully selected to reflect style, quality, and individuality.
        </p>
      </section>

      <section className="about-section">
        <h2>Customer Support</h2>
        <p>
          Our dedicated customer support team ensures a smooth shopping experience. We value your satisfaction and strive to respond promptly to all queries.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To redefine fashion shopping by offering exceptional products, outstanding service, and a memorable experience for every customer.
        </p>
      </section>
    </div>
  );
}
