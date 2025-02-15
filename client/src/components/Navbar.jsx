import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout, isLoading, error } = useAuth0();

  console.log("Auth0 Debugging: ", {
    isAuthenticated,
    isLoading,
    user,
    error,
  });

  return (
    <nav className="bg-green-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Carbon Tracker" className="w-32 h-12" />
        <h1 className="text-xl font-bold">Carbon Footprint Report</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>

        {/* Show Loading State */}
        {isLoading ? (
          <p>Loading...</p>
        ) : isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <h4 className="text-sm text-gray-300">Welcome, {user?.name}!</h4>
            <button
              className="bg-red-500 border border-white text-white px-4 py-2 rounded-md hover:bg-red-700"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-green-500 border border-white text-white px-4 py-2 rounded-md hover:bg-green-700"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
