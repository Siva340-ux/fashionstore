// src/Components/Hero.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const heroSlides = [
  {
    id: 1,
    title: "Discover the Latest Trends",
    subtitle: "Upgrade your wardrobe with our exclusive collection.",
    image:
      "https://www.gownseason.com/wp-content/uploads/2022/08/G0818.jpg",
  },
  {
    id: 2,
    title: "Stylish & Unique Fashion",
    subtitle: "Find pieces that make you stand out from the crowd.",
    image:
      "https://cdn.sareeka.com/image/data2018/embroidered-work-floor-length-anarkali-suit-77789.jpg",
  },
  {
    id: 3,
    title: "Comfort Meets Style",
    subtitle: "Shop our latest collection of comfortable outfits.",
    image:
      "https://cdn.shopify.com/s/files/1/0341/4805/7228/files/Blog-CTA_804425f5-d5b0-4259-abe1-8be78b052baf.jpg?v=1659329105",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleShopNow = () => {
    navigate("/shop");
  };

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
    >
      <div className="hero-overlay">
        <h1>{heroSlides[currentSlide].title}</h1>
        <p>{heroSlides[currentSlide].subtitle}</p>
        <button onClick={handleShopNow}>Shop Now</button>
      </div>
    </div>
  );
}
