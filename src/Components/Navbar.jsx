import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";  // Add this
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);  // New: Account dropdown
  const { cart, setFilteredProducts, products } = useCart();
  const { user, logout, loading } = useAuth();  // Add auth
  const navigate = useNavigate();

  // Calculate total quantity of items in cart
  const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    // Filter products based on search query
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);

    // Redirect to Shop page
    navigate("/shop");
    setSearchQuery(""); // Clear search bar
    setMenuOpen(false); // Close menu if mobile
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="highlight">Fashion</span>Store
        </Link>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/categories" onClick={() => setMenuOpen(false)}>Categories</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>

        {/* Search + Cart + Account */}
        <div className="nav-actions">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search products..."
              className="search-bar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* Account Dropdown/Button */}
          <div className="account-section" onMouseLeave={() => setDropdownOpen(false)}>
            {loading ? (
              <div className="account-btn loading">Loading...</div>
            ) : user ? (
              <>
                <button 
                  className="account-btn logged-in"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Hi, {user.email.split('@')[0]} ▼
                </button>
                {dropdownOpen && (
                  <div className="account-dropdown">
                    <Link to="/profile" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Profile</Link>
                    <button className="dropdown-item logout" onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="auth-btn login" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/register" className="auth-btn register" onClick={() => setMenuOpen(false)}>Register</Link>
              </div>
            )}
          </div>

          <Link to="/cart" className="cart-btn">
            🛒
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
