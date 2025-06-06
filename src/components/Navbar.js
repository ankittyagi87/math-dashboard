import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center mb-6">
      {/* Logo / Title */}
      <h2 className="text-lg font-bold">Welcome to Math Learning Platform</h2>
      
      {/* Navigation Links */}
      <div className="space-x-4">
        <button className="hover:text-gray-300" onClick={() => console.log('Go to Home')}>Home</button>
        <button className="hover:text-gray-300" onClick={() => console.log('Go to Problems')}>Problems</button>
        <button className="hover:text-gray-300" onClick={() => console.log('Go to Leaderboard')}>Leaderboard</button>
        <button className="hover:text-gray-300" onClick={() => console.log('Go to Profile')}>Profile</button>

      </div>
    </nav>
  );
};

export default Navbar;
