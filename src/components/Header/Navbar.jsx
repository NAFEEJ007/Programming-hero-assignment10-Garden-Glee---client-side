import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <li className="mx-2 text-sm hover:text-emerald-700 transition duration-200">Home</li>
      <li className="mx-2 text-sm hover:text-emerald-700 transition duration-200">Explore Gardens</li>
      <li className="mx-2 text-sm hover:text-emerald-700 transition duration-200">Browse Tips</li>
      <li className="mx-2 text-sm hover:text-emerald-700 transition duration-200">Share Garden Tips</li>
      <li className="mx-2 text-sm hover:text-emerald-700 transition duration-200">My Tips</li>
      <li className="mx-2 text-sm hover:text-emerald-700 transition duration-200">Login</li>
      <li className="mx-2 text-sm hover:text-emerald-700 transition duration-200">Sign Up</li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="navbar bg-gradient-to-r from-green-100 via-emerald-100 to-lime-100 px-6 py-3 backdrop-blur-md bg-opacity-90">
        {/* Start */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-white rounded-box w-56 text-gray-700"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-12 h-12 rounded-full shadow" src={logo} alt="Logo" />
            <span className="text-xl font-semibold text-emerald-700 tracking-wide">Garden Glee</span>
          </div>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center text-gray-800 font-medium">{links}</ul>
        </div>

        {/* End */}
        <div className="navbar-end hidden lg:flex">
          <a className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-200 rounded-full px-5 shadow">
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
