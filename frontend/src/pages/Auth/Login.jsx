import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin } from '@react-oauth/google';
import * as jwtDecode from 'jwt-decode';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext); // ✅ get context setter

 

const handleLogin = async (e) => {
  e.preventDefault();
  if (!email || !password) {
    toast.error('Please fill in all fields');
    return;
  }

  try {
    const res = await axios.post('http://localhost:5000/api/login', { email, password });
    if(res.data.success){
      toast.success(res.data.message);
       // ✅ Save user in context and localStorage
        setUser(res.data.user);
        localStorage.setItem('user', JSON.stringify(res.data.user));

        navigate('/dashboard'); // go to dashboard
    }
  } catch (err) {
    toast.error(err.response?.data?.message || 'Login failed');
  }
};






  const handleGoogleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    toast.success(`Welcome ${decoded.name}`);
    // ✅ Save user in context and localStorage
    const userData = {
      name: decoded.name,
      email: decoded.email,
      googleId: decoded.sub,
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));

    navigate('/dashboard');
  };

  const handleGoogleLoginError = () => {
    toast.error('Google Sign-In Failed');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-gray-50 shadow-2xl rounded-3xl p-12 md:p-16 relative">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center tracking-tight">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-600 mb-5">
          Sign in to manage your finances and track your goals.
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-2xl border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-gray-700 mb-2 font-medium">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="px-5 py-3 rounded-2xl border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
            <button
              type="button"
              className="absolute right-5 top-[47px] text-gray-500 hover:text-gray-700 transition"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white font-semibold rounded-2xl shadow-lg transition-all"
          >
            Login
          </button>
        </form>

        {/* Separator */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500 font-medium">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
            useOneTap
          />
        </div>

        {/* Signup */}
        <p className="mt-8 text-center text-gray-600">
          Don’t have an account?{' '}
          <span
            className="text-gray-800 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
