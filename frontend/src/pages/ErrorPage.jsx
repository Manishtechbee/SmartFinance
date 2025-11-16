import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Oops! Page not found.
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        The page you are looking for does not exist or an error occurred.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
