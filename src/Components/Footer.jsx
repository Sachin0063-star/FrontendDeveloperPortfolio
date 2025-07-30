import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold italic mb-4 md:mb-0 hover:text-gray-200 transition duration-300">
          Portfolio
        </h1>
        <p className="text-sm text-center md:text-left">
          © 2025 My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
