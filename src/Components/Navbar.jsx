import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { cart, setFilteredProducts, products } = useCart();
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(filtered);
    navigate("/shop");
    setSearchQuery("");
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="highlight">Fashion</span>Store
          </Link>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Desktop Links */}
          <div className="nav-links desktop">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Desktop Actions */}
          <div className="nav-actions desktop">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search..."
                className="search-bar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            <Link to="/cart" className="cart-btn">
              🛒
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </Link>

            {!loading && user ? (
              <div className="account-section">
                <button
                  className="account-btn logged-in"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Hi, {user.email.split("@")[0]} ▼
                </button>

                {dropdownOpen && (
                  <div className="account-dropdown">
                    <button
                      className="dropdown-item logout"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="auth-btn login">
                  Login
                </Link>
                <Link to="/register" className="auth-btn register">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ===== MOBILE DRAWER ===== */}
      <div className={`mobile-overlay ${menuOpen ? "show" : ""}`}
           onClick={() => setMenuOpen(false)} />

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <form onSubmit={handleSearch} className="mobile-search">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/categories" onClick={() => setMenuOpen(false)}>Categories</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About us</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>
          Cart ({cartCount})
        </Link>

        {!loading && user ? (
          <button className="mobile-logout" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
          </>
        )}
      </div>
    </>
  );
}