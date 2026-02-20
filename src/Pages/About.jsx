import React from "react";

export default function About() {
  return (
    <div className="page-container">
      <h1>About Fashion Store</h1>

      <div className="about-content">
        <section>
          <p>
            Welcome to <span className="highlight">Fashion Store</span> – your
            one-stop destination for unique and stylish fashion items.
            We started our journey in <strong>2020</strong> with the mission
            to bring extraordinary products to fashion lovers worldwide.
          </p>
        </section>

        <section>
          <h2>Our Unique Products</h2>
          <p>
            We curate exclusive collections of clothing and accessories
            that reflect quality, individuality, and modern trends.
          </p>
        </section>

        <section>
          <h2>Customer Support</h2>
          <p>
            Our support team ensures a smooth shopping experience and
            responds promptly to all queries.
          </p>
        </section>

        <section>
          <h2>Our Vision</h2>
          <p>
            To redefine fashion shopping by offering exceptional products
            and memorable experiences.
          </p>
        </section>
      </div>
    </div>
  );
}