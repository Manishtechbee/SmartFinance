import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, CreditCard, PieChart, Target, FileText, BarChart2, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: <Home size={20} /> },
  { name: 'Transactions', path: '/transactions', icon: <CreditCard size={20} /> },
  { name: 'Budget', path: '/budget', icon: <PieChart size={20} /> },
  { name: 'Goals', path: '/goals', icon: <Target size={20} /> },
  { name: 'Reports', path: '/reports', icon: <FileText size={20} /> },
  { name: 'Investments', path: '/investments', icon: <BarChart2 size={20} /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    toast.info(isOpen ? 'Sidebar Closed' : 'Sidebar Open');
  };

  return (
    <>
      {/* Hamburger for mobile */}
      <button className="fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-lg shadow-lg lg:hidden" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>

      <div className={`fixed top-0 left-0 h-full bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 text-white shadow-lg transition-all duration-300 z-40 ${isOpen ? 'w-64' : 'w-16'}`}>
        {/* Header / Toggle */}
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          {isOpen && <h1 className="text-2xl font-bold tracking-wide">SmartFinance</h1>}
          <button onClick={toggleSidebar} className="text-white">
            {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-6 flex flex-col gap-2">
          {menuItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 
                  ${active ? 'bg-gray-100 text-gray-900 shadow-md' : 'hover:bg-gray-700 hover:text-white'}
                  ${isOpen ? 'justify-start' : 'justify-center'}`}
                onClick={() => toast.success(`${item.name} Selected!`)}
              >
                <span className={`${active ? 'text-gray-900' : 'text-white'}`}>{item.icon}</span>
                {isOpen && <span className="font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Finance Tip */}
        {isOpen && (
          <div className="absolute bottom-6 left-4">
            <button
              onClick={() => toast.success('Finance Tip: Review your budget weekly!')}
              className="flex items-center gap-2 px-4 py-2 bg-green-400 rounded-lg hover:bg-green-500 transition shadow-sm text-gray-900"
            >
              💡 Finance Tip
            </button>
          </div>
        )}
      </div>
    </>
  );
}