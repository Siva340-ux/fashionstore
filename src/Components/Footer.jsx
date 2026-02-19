import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-about">
          <h3>FashionStore</h3>
          <p>
            Your go-to online store for the latest fashion trends. Stylish clothes, shoes, and accessories for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4></h4>
          <p>Get the latest updates and offers.</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Get in Touch</button>
          </form>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
  <div className="social-icons">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-whatsapp"></i>
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f"></i>
    </a>
  </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} FashionStore. All rights reserved.
      </div>
    </footer>
  );
}
