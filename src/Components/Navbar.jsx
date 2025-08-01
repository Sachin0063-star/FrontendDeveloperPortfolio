import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'About', link: '#about' },
    { id: 3, name: 'Skills', link: '#skills' },
    { id: 4, name: 'Projects', link: '#projects' },
    { id: 5, name: 'Contact', link: '#contact' },
  ];

  const scrollToSection = (e, link) => {
    e.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      if (link.name === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const section = document.querySelector(link.link);
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <header className='fixed top-0 left-0 w-full z-50 text-white bg-gray-950'>
      <div className="container mx-auto flex items-center justify-between p-5">
        <a href="#home" className='text-4xl font-bold italic text-white'>Portfolio</a>

        <button
          className='md:hidden focus:outline-none z-30'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX className='w-8 h-8 text-white' /> : <FiMenu className='w-8 h-8 text-white' />}
        </button>

        <nav className='hidden md:flex items-center space-x-7'>
          {navbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className='hover:text-gray-200 text-lg'
              onClick={(e) => scrollToSection(e, link)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div className='md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16 z-10'>
          {navbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className='text-lg text-white hover:text-gray-300'
              onClick={(e) => scrollToSection(e, link)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
