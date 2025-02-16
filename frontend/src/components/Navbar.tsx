import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Bike, User, Menu, X, LogOut } from 'lucide-react';
import axios from 'axios';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check for token on mount and when token changes
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, [localStorage.getItem('authToken')]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:3001/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('authToken');
      setIsLoggedIn(false);
      navigate('/login');
    }
  };

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Bike className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Futta-Bikes</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/about" className="hover:text-indigo-200">
                About
              </Link>
              <Link to="/services" className="hover:text-indigo-200">
                Services
              </Link>
              <Link to="/contact" className="hover:text-indigo-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="p-2 rounded-full hover:bg-indigo-700"
                aria-label="Log out"
              >
                <LogOut className="h-6 w-6" />
              </button>
            ) : (
              <Link to="/login">
                <button
                  className="p-2 rounded-full hover:bg-indigo-700"
                  aria-label="Log in"
                >
                  <User className="h-6 w-6" />
                </button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-indigo-700"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <Link
                to="/about"
                className="hover:text-indigo-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="hover:text-indigo-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="hover:text-indigo-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}