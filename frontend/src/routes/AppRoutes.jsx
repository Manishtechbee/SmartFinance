import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { Contact } from "../pages/Contact";
import { Features } from "../pages/Feature";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
{/*import Transactions from "../pages/Transactions";
import Budget from "../pages/Budget";
import Goals from "../pages/Goals";
import Reports from "../pages/Reports";
import Investments from "../pages/Investments";

*/}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
       {/* Authentication pages*/} 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main pages */}
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute> } />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute> } />
        
        <Route path="/features" element={<ProtectedRoute><Features /></ProtectedRoute> } />
        
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute> } />
        
        <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute> } />
        {/*<Route path="/transactions" element={<Transactions />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/investments" element={<Investments />} />*/}
      </Routes>
    </BrowserRouter>
  );
}
