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
import ErrorPage from "../pages/ErrorPage";
import Chatbot from "../components/ui/assistant";
import { BlogArticle } from "../pages/BlogArticle";
import { Pricing } from "../pages/Pricing";
import { TermsConditions } from "../pages/TermsConditions";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
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
        <Route path="/contact" element={<Contact /> } />
        <Route path="/features" element={<Features /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/blog" element={<Blog /> } />
        <Route path="/blogarticle" element={<BlogArticle /> } />
        <Route path="/terms" element={<TermsConditions /> } />
        <Route path="/privacy" element={<PrivacyPolicy/> } />
        <Route path="/pricing" element={<Pricing /> } />
        <Route path="*" element={<ErrorPage />} />
        {/*<Route path="/transactions" element={<Transactions />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/investments" element={<Investments />} />*/}
      </Routes>
      <Chatbot/>
    </BrowserRouter>
  );
}
