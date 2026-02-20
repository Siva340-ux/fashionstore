import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../Context/AuthContext';
import './Login.css'; // Import the separate CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user) navigate('/'); // Redirect if logged in

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Or shop/products
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
         
          <h2 className="login-title">Sign in</h2>
          <p className="login-subtitle">Welcome back to Online Bookstore</p>
          
          <form className="login-form" onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            
            <div className="input-group">
              <label htmlFor="email" className="input-label">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field amazon-style"
                placeholder="siva@example.com"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="password" className="input-label">Password</label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field amazon-style"
                placeholder="••••••••"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="login-button amazon-button"
            >
              {loading ? (
                <span className="loading-spinner">
                  <div className="spinner"></div>
                  Signing in...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </form>
          
          <div className="login-footer">
            <Link to="/register" className="register-link">
              Create your new Online Bookstore account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
