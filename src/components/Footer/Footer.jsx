import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-lime-100 via-green-100 to-emerald-100 text-green-900 px-6 py-10 rounded-t-xl shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Brand and Nav Links */}
        <div className="text-center lg:text-left space-y-4">
          <h3 className="text-2xl font-bold text-emerald-700 flex items-center justify-center lg:justify-start gap-2">
            <FaLeaf className="text-green-600" /> Garden Glee
          </h3>
          <nav className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
            <a className="hover:underline" href="#">About Us</a>
            <a className="hover:underline" href="#">Contact</a>
            <a className="hover:underline" href="#">Terms & Conditions</a>
          </nav>
        </div>

        {/* Social Icons */}
<div className="flex gap-5 text-green-700 text-xl">
  <a
    href="https://www.facebook.com/groups/1439704222995812/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-900"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://x.com/Love_plants"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-900"
  >
    <FaTwitter />
  </a>
  <a
    href="https://www.instagram.com/p/DKzpQSTu7Zi/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-900"
  >
    <FaInstagram />
  </a>
</div>


        {/* Copyright */}
        <div className="text-sm text-center lg:text-right text-green-800">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold">Garden Glee Ltd</span> — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
