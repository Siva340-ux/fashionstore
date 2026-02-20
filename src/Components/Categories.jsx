import React from "react";
import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "Men",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: 2,
    name: "Women",
    image: "https://i.pinimg.com/736x/2c/21/29/2c21297e69b3ca1563d372011877414c.jpg",
  },
  {
    id: 3,
    name: "Watches",
    image: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb",
  },
  {
    id: 4,
    name: "Shoes",
    image: "https://th.bing.com/th/id/OIP.0WyLqGKuJCq7rH_JeImGoQHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
];

export default function Categories() {
  if (!categories || categories.length === 0) {
    return <div>No categories available</div>;
  }

  return (
    <section className="categories">
      <h2 className="categories-title">Top Categories</h2>

      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img
              src={category.image}
              alt={category.name}
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/300x300?text=No+Image")
              }
            />
            <div className="category-overlay">
              <h3>{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}