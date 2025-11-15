import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <AppRoutes/>
      <ToastContainer position="top-right" autoClose={2000} theme="light" />
    </>
  );
}

export default App;


