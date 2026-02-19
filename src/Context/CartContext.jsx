import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // NEW

  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Classic White T-Shirt",
      price: 199,
      image: "https://tse2.mm.bing.net/th/id/OIP.u8l7JIzs8cgsUK09iWP6pgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Men", // Add category field
    },
    {
      id: "2",
      name: "Blue Denim Jeans",
      price: 499,
      image: "https://cdnd.lystit.com/photos/2126-2014/05/24/zara-blue-mid-rise-denim-jeans-product-1-20312608-0-198578029-normal.jpeg",
      category: "Men",
    },
    {
      id: "3",
      name: "Red Hoodie",
      price: 299,
      image: "https://img.freepik.com/premium-photo/red-hoodie-with-hoodie-it_1022797-598.jpg",
      category: "Women",
    },
    {
      id: "4",
      name: "Black Sneakers",
      price: 599,
      image: "https://th.bing.com/th/id/OIP.0N57ZJXVqGYriHkqzdPlKAHaE8?w=285&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      category: "Accessories",
    },
    {
      id: "5",
      name: "Women Kurti",
      price: 499,
      image: "https://tse4.mm.bing.net/th/id/OIP.cdZwKfApk4mFL1IJr6Vi2AHaNT?pid=ImgDet&w=187&h=335&c=7&dpr=1.3&o=7&rm=3",
      category: "Women", // Add category field
    },
    {
      id: "6",
      name: "Women Kurti",
      price: 499,
      image: "https://ik.imagekit.io/ldqsn9vvwgg/images/1882162.jpg",
      category: "Women",
    },
    {
      id: "7",
      name: "Women Kurti",
      price: 699,
      image: "https://tse1.explicit.bing.net/th/id/OIP.vYcGz-DUlPIuVPR3Fzl4VwHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Women",
    },
    {
      id: "8",
      name: "Black Sneakers",
      price: 599,
      image: "https://th.bing.com/th/id/OIP.0N57ZJXVqGYriHkqzdPlKAHaE8?w=285&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      category: "Accessories",
    },
    {
      id: "9",
      name: "Classic White T-Shirt",
      price: 199,
      image: "https://tse2.mm.bing.net/th/id/OIP.u8l7JIzs8cgsUK09iWP6pgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Men", // Add category field
    },
    {
      id: "10",
      name: "Blue Denim Jeans",
      price: 499,
      image: "https://cdnd.lystit.com/photos/2126-2014/05/24/zara-blue-mid-rise-denim-jeans-product-1-20312608-0-198578029-normal.jpeg",
      category: "Men",
    },
    {
      id: "11",
      name: "Red Hoodie",
      price: 299,
      image: "https://img.freepik.com/premium-photo/red-hoodie-with-hoodie-it_1022797-598.jpg",
      category: "Women",
    },
    {
      id: "12",
      name: "Black Sneakers",
      price: 599,
      image: "https://th.bing.com/th/id/OIP.0N57ZJXVqGYriHkqzdPlKAHaE8?w=285&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      category: "Accessories",
    },
    {
      id: "13",
      name: "Classic T-Shirt",
      price: 199,
      image: "https://i.pinimg.com/originals/49/81/3e/49813e1a74bfad7e86f82bfd7f397696.png",
      category: "Men", // Add category field
    },
    {
      id: "14",
      name: "Men Linen Shirt",
      price: 599,
      image: "https://handcmediastorage.blob.core.windows.net/productimages/CG/CGPLE008-N01-171627-1400px-1820px.jpg",
      category: "Men",
    },
    {
      id: "15",
      name: "Red Hoodie",
      price: 299,
      image: "https://img.freepik.com/premium-photo/red-hoodie-with-hoodie-it_1022797-598.jpg",
      category: "Women",
    },
    {
      id: "16",
      name: "Black Sneakers",
      price: 599,
      image: "https://th.bing.com/th/id/OIP.0N57ZJXVqGYriHkqzdPlKAHaE8?w=285&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      category: "Accessories",
    },

















  ]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        addToCart,
        addProduct,
        setCart,
        filteredProducts,
        setFilteredProducts, // NEW
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
