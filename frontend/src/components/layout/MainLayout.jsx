import { useState } from 'react';

import Sidebar from './Sidebar';

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 min-h-screen bg-gray-100">
        
        <main className="pt-16 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}