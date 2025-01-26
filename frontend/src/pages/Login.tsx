import { Lock, Mail } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
    setError('');
  
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
  
      console.log('Login successful:', response.data);
      // Redirect or store authentication token here
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during login.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Login</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome back! Please log in to access your account.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Login to Your Account</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                  />
                </div>
              </div>
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
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-indigo-400"
              >
                {loading ? 'Logging in...' : 'Log In'}
              </button>
            </form>
            {error && <p className="mt-4 text-center text-red-500">{error}</p>}
            <div className="mt-4 text-center">
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">New to Our Platform?</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Create an account to get started. Enjoy exclusive benefits and
                manage your account with ease.
              </p>
              <button
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Need Help?</h3>
            <p className="text-gray-600">
              If you're having trouble logging in, contact our support team at
              support@example.com or call (555) 123-4567.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}