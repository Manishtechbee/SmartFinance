import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState('');

  const navigate = useNavigate();

   const handleSignup = async (e) => {
    e.preventDefault();

    if ( !name || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Password restrictions
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        'Password must be at least 8 characters, include uppercase, lowercase, number, and special character'
      );
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        name,
        email,
        password,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/login');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
    }
  };


 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-gray-50 shadow-2xl rounded-3xl p-12 md:p-16 relative">
        <h2 className="text-4xl font-bold text-gray-800 mb-5 text-center tracking-tight">
          Create Account
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Sign up to start managing your finances efficiently.
        </p>

        <form onSubmit={handleSignup} className="flex flex-col gap-6">
          <div className="flex flex-col">
  <label className="text-gray-700 mb-2 font-medium">Name</label>
  <input
    type="text"
    placeholder="Enter your name"
    className="px-5 py-3 rounded-2xl border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
</div>

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
              className="px-5 py-3 rounded-2xl border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition pr-12"
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

          <div className="flex flex-col relative">
            <label className="text-gray-700 mb-2 font-medium">Confirm Password</label>
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Confirm your password"
              className="px-5 py-3 rounded-2xl border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition pr-12"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-5 top-[47px] text-gray-500 hover:text-gray-700 transition"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            
          </div>

          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white font-semibold rounded-2xl shadow-lg transition-all"
          >
            Sign Up
          </button>
        </form>

       

        <p className="mt-8 text-center text-gray-600">
          Already have an account?{' '}
          <span
            className="text-gray-800 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
