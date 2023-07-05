import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar sticky top-0 bg-transparent flex justify-between items-center px-6 py-4 md:px-10 md:py-6">
      <div className="font-mono text-black text-xl">
        <h1>HI, Zahra Azaria</h1>
      </div>
      <div className="flex-none md:hidden">
        <button
          className="text-black text-xl focus:outline-none"
          onClick={handleMenuToggle}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                d="M14.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L17.586 11H2a1 1 0 010-2h15.586l-3.293-3.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5a1 1 0 011-1h10a1 1 0 010 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 010 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 010 2H5a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block md:flex-none mt-4 md:mt-0`}
      >
        <ul className="text-black font-mono flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <li>INVITATION</li>
          <li>EVENT VENUE</li>
          <li>GREETINGS</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
