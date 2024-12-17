
import React from "react";

const Header = () => {
  return (
    <header className="bg-hcolour p-4  border-hcolour">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Left Section */}
        <div className="flex flex-wrap items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto text-center sm:text-left">
          <p className="text-sm text-gray-600 w-full sm:w-auto">
            <span>Email: support@example.com</span>
          </p>
          <p className="text-sm text-gray-600 w-full sm:w-auto">
            <span>Phone: +1-234-567-890</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center space-y-2 sm:space-y-0 sm:space-x-6 w-full sm:w-auto text-center sm:text-right">
          <select className=" border-hcolour rounded-full px-3 py-2 w-full sm:w-auto">
            <option>English</option>
            <option>Español</option>
          </select>
          <select className=" border-hcolour rounded px-3 py-2 w-full sm:w-auto">
            <option>USD</option>
            <option>EUR</option>
          </select>
          <button className="bg-hcolour text-thcolour px-4 py-2 rounded w-full sm:w-auto">
            Login
          </button>
        
        </div>
      </div>
    </header>
  );
};

export default Header;

