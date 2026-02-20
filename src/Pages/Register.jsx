import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../Context/AuthContext';
import './Register.css'; // Import the separate CSS

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user) navigate('/');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
         
          <h2 className="register-title">Create account</h2>
          <p className="register-subtitle">Join Online Bookstore</p>
          
          <form className="register-form" onSubmit={handleSubmit}>
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
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field amazon-style"
                placeholder="At least 6 characters"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="register-button amazon-button"
            >
              {loading ? (
                <span className="loading-spinner">
                  <div className="spinner"></div>
                  Creating...
                </span>
              ) : (
                'Register'
              )}
            </button>
          </form>
          
          <div className="register-footer">
            <Link to="/login" className="login-link">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
