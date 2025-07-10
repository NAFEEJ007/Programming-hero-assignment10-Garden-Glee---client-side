import { use, useState } from "react";
import {
  FaLeaf,
  FaSeedling,
  FaUserAlt,
  FaLightbulb,
  FaSignInAlt,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log(user.photoURL);
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "🌿 You are Logged Out!",
  text: "Hope to see you back in the garden soon!",
  background: "#f0fdf4", // soft green background
  color: "#2e7d32",      // deep green text
  iconColor: "#43a047",  // healthy green check
  showConfirmButton: false,
  timer: 1800,
  customClass: {
    popup: "rounded-xl shadow-lg",
    title: "text-lg font-semibold",
  },
});

      })
      .catch((error) => {
        console.log(error);

      });
  };

  const links = (
    <>
      <li className="text-sm hover:text-emerald-700 transition duration-200 flex items-center gap-1">
        <Link to="/" className="flex items-center gap-1">
          <FaLeaf className="text-green-600" /> Home
        </Link>
      </li>

      <li className="text-sm hover:text-emerald-700 transition duration-200 flex items-center gap-1">
        <Link to="/gardeners" className="flex items-center gap-1">
          <FaSeedling className="text-lime-600" />
          Explore Gardeners
        </Link>
      </li>

      <li className="text-sm hover:text-emerald-700 transition duration-200 flex items-center gap-1">
        <Link to="/browse-Tips" className="flex items-center gap-1">
          <FaLightbulb className="text-yellow-500" />
          Browse Tips
        </Link>
      </li>

      {user ? (
        <>
          <li className="text-sm hover:text-emerald-700 transition duration-200 flex items-center gap-1">
            <Link to="/share-tip" className="flex items-center gap-1">
              <FaClipboardList className="text-green-700" /> Share Tips
            </Link>
          </li>

          <li className="text-sm hover:text-emerald-700 transition duration-200 flex items-center gap-1">
            <Link to="/my-tips" className="flex items-center gap-1">
              <FaUserAlt className="text-teal-600" /> My Tips
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="text-sm hover:text-emerald-700 transition duration-200 flex items-center gap-1">
            <Link to="/login" className="flex items-center gap-1">
              <FaSignInAlt className="text-orange-600" /> Login
            </Link>
          </li>

          <li className="text-sm hover:text-emerald-700 transition duration-200 flex items-center gap-1">
            <Link to="/signup" className="flex items-center gap-1">
              <FaUserAlt className="text-pink-500" /> Sign Up
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="navbar bg-gradient-to-r from-lime-100 via-green-100 to-emerald-100 px-6 py-3 backdrop-blur-md bg-opacity-90 flex items-center justify-between">
        {/* Left: Mobile menu + logo + nav links */}
        <div className="flex items-center gap-8">
          {/* Mobile hamburger */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-700"
                fill="bg-none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h10M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-white rounded-box w-56 text-gray-700"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <FaLeaf className="text-green-700 text-2xl" />
            <span className="text-2xl font-bold text-emerald-800 tracking-wide">
              Garden Glee
            </span>
          </div>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex gap-x-25 items-center text-gray-800 font-medium lg:ml-12 ">
            {links}
          </ul>
        </div>

        {/* Right: Profile Picture */}
        <div className="flex items-center">
          <div
            className="
    tooltip 
    tooltip-bottom 
    min-[1281px]:tooltip-right

    before:bg-gradient-to-br 
    before:from-emerald-400 before:via-lime-400 before:to-green-500 
    before:text-black before:rounded-md before:px-3 before:py-1 
    before:shadow-lg before:border before:border-green-300

    max-[1280px]:before:translate-x-[-40%] 
    min-[1281px]:before:translate-x-0
  "
            data-tip={user ? user.email : "No user Logged In"}
          >
            <div className="relative">
              {/* Avatar: click to toggle logout button */}
              <div
                onClick={() => setShowLogoutButton(!showLogoutButton)}
                className="cursor-pointer avatar avatar-online avatar-placeholder rounded-full p-[4px] bg-gradient-to-br from-emerald-400 via-lime-400 to-green-500 text-black shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-neutral text-neutral-content w-14 h-14 rounded-full overflow-hidden">
                  {user?.photoURL ? (
                    <img
                      alt="User Profile"
                      className="cursor-pointer w-full h-full object-cover"
                      src={user.photoURL}
                    />
                  ) : (
                    <span className="text-xs font-bold flex items-center justify-center w-full h-full text-white rounded-full">
                      No user
                    </span>
                  )}
                </div>
              </div>

              {/* Logout button appears on click */}
              {user && showLogoutButton && (
                <button
                  onClick={handleLogOut}
                  className="cursor-pointer absolute top-full left--2 md:left-4 lg:left-1/2 lg:-translate-x-1/2 mt-2 opacity-100 transition-all duration-200 bg-white text-green-700 border border-green-400 px-3 py-1 rounded-xl shadow-md flex items-center gap-1 text-sm hover:bg-green-600 hover:text-white z-50"
                >
                  <FaSignOutAlt className="cursor-pointer text-current" />
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
