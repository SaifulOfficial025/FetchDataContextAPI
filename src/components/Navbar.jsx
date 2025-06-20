import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const linkClasses = (path) =>
    `px-4 py-2 rounded-md text-sm font-medium ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        MyApp
      </div>

      <div className="space-x-4">
        <Link to="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link to="/datashow" className={linkClasses("/datashow")}>
          Data Show 1
        </Link>
        <Link to="/datashow2" className={linkClasses("/datashow2")}>
          Data Show 2
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
