import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BarChart3, SunMoon } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Transactions", path: "/transactions" },
    { name: "Budget", path: "/budget" },
    { name: "Goals", path: "/goals" },
    { name: "Reports", path: "/reports" },
    { name: "Investments", path: "/investments" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleThemeSwitch = () => toast.info("Theme switching coming soon!");
  const handleLogout = () => toast.success("Logged out successfully!");

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gray-800 p-2 rounded-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-900 font-bold text-xl">SmartFinance</span>
          </Link>

          {/* Search bar (hidden on small screens) */}
          <div className="hidden md:flex flex-1 mx-4">
            <input
              type="text"
              placeholder="Search transactions, insights..."
              className="w-2xl mx-9 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-md transition-colors ${
                  isActive(link.path)
                    ? "text-gray-900 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section: Theme & Auth */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleThemeSwitch}
              className="text-gray-600 mx-5 hover:text-blue-600 transition"
            >
              <SunMoon className="w-6 h-6" />
            </button>

            {/* Login / Signup */}
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" className="text-gray-600">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                  Signup
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-2 text-sm ${
                isActive(link.path) ? "text-gray-900 font-semibold" : "text-gray-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 space-y-2">
            <button
              onClick={() => {
                handleThemeSwitch();
                setIsOpen(false);
              }}
              className="w-full text-blue-600 font-semibold text-left"
            >
              Switch Theme
            </button>

            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">
                Login
              </Button>
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                Signup
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
