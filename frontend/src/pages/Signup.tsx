import { Lock, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Signup() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    
    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/signup', {
        firstName,
        lastName,
        email,
        password,
      });

      console.log('Sign up successful:', response.data);
      // Redirect or store authentication token here
        navigate('/');
      // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during sign up.');
      console.error('Sign up error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sign Up</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create an account to get started. Enjoy exclusive benefits and manage your account with ease.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Sign Up Form */}
        <div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Create Your Account</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* First Name Field */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <div className="relative">
                  <User className="h-5 w-5 text-indigo-600 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    name="firstName"
                  />
                </div>
              </div>

              {/* Last Name Field */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <div className="relative">
                  <User className="h-5 w-5 text-indigo-600 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    name="lastName"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="h-5 w-5 text-indigo-600 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    name="email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="h-5 w-5 text-indigo-600 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    name="password"
                  />
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="h-5 w-5 text-indigo-600 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    name="confirmPassword"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-indigo-400"
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
            </form>

            {/* Error Message */}
            {error && <p className="mt-4 text-center text-red-500">{error}</p>}
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Already Have an Account?</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Log in to access your account and manage your profile.
              </p>
              <Link to="/login">
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                  Log In
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Need Help?</h3>
            <p className="text-gray-600">
              If you're having trouble signing up, contact our support team at
              support@example.com or call (555) 123-4567.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}