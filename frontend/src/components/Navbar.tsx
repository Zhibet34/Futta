import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bike, User, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isloggedIn, setIsloggedIn] = useState(false); // State to manage mobile menu visibility

  const toggleloggedInMenu = () => {
    setIsloggedIn(!isMobileMenuOpen);
  }; // a logout icons if a user is logged in

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

          {/* Desktop Menu (hidden on small screens) */}
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

          {/* Icons (User and Mobile Menu Toggle) */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="p-2 rounded-full hover:bg-indigo-700">
                <User className="h-6 w-6" />
              </button>
            </Link>
            {/* Mobile Menu Toggle Button (hidden on larger screens) */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-indigo-700"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (visible on small screens) */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <Link to="/about" className="hover:text-indigo-200" onClick={toggleMobileMenu}>
                About
              </Link>
              <Link to="/services" className="hover:text-indigo-200" onClick={toggleMobileMenu}>
                Services
              </Link>
              <Link to="/contact" className="hover:text-indigo-200" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}