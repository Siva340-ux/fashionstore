import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedProducts from "./Components/FeaturedProducts";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BacktoTop";
import PromoBanner from "./Components/PromoBanner";
import { CartProvider } from "./Context/CartContext";
import CartPage from "./Pages/CartPage";
import Shop from "./Pages/Shop";
import CategoriesPage from "./Pages/Categories";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useAuth, AuthProvider } from "./Context/AuthContext";  // Import both

// ProtectedRoute component (add this)
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="loading">Loading...</div>;
  return user ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <AuthProvider>        {/* ← ADD THIS: Auth context for Navbar/Login */}
      <CartProvider>
        <Router>          {/* ← KEEP THIS: Your existing router */}
          <Navbar />
          <PromoBanner />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/shop" 
              element={
                <ProtectedRoute>
                  <Shop />
                </ProtectedRoute>
              } 
            />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/cart" 
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              } 
            />
          </Routes>
          
          <Footer />
          <BackToTop />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
