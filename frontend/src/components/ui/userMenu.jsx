import { useState, useRef, useEffect } from "react";
import { User, LogOut, Settings, CreditCard } from "lucide-react";
import { toast } from "react-toastify";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
const handleLogout = () => toast.success("Logged out successfully!");
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  

  

  return (
    <div className="relative ml-3" ref={menuRef}>
      
      {/* USER ICON — CLEAN MODERN LOOK */}
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      >
        <User
          className="text-gray-700 hover:text-gray-900 transition-all duration-200 hover:scale-110"
          size={26}
        />
      </button>

      {/* MODERN GLASS DROPDOWN */}
      {open && (
        <div
          className="absolute right-0 mt-3 w-56 rounded-2xl shadow-2xl z-50 
          backdrop-blur-lg bg-white/80 border border-white/30 
          animate-dropdown scale-[0.98] opacity-0"
        >

          {/* USER HEADER */}
          <div className="p-4 border-b border-gray-200/50 bg-white/60 rounded-t-2xl">
            <p className="text-sm font-semibold text-gray-800">Manish Kumar</p>
            <p className="text-xs text-gray-500">manish@example.com</p>
          </div>

          {/* MENU ITEMS */}
          <div className="p-2">
            <MenuItem icon={<CreditCard size={18} />} label="Transactions" />
            <MenuItem icon={<Settings size={18} />} label="Settings" />
          </div>

          {/* LOGOUT */}
          <div className="border-t border-gray-200/50 p-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl 
              hover:bg-red-50 text-red-600 transition text-sm font-medium" onClick={handleLogout}>
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style>{`
        .animate-dropdown {
          animation: fadeScale 0.18s ease forwards;
        }
        @keyframes fadeScale {
          0%   { opacity: 0; transform: translateY(-6px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

/* REUSABLE MENU ITEM COMPONENT */
function MenuItem({ icon, label }) {
  return (
    <button
      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl 
      hover:bg-gray-100 transition text-gray-700 text-sm font-medium"
    >
      {icon} {label}
    </button>
  );
}
