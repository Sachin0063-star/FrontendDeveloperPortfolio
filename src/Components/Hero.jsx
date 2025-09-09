import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import imghero from '/imghero.png';
import github from '/github.png';
import linkedin from '/linkedin.png';
import facebook from '/facebook.png';
import instagram from '/instagram.png';
import cv from '/resume.png';
import Abt from '/Abt.png';
import myfoto from '/my foto.jpg';

export default function Hero() {
  return (
    <main
      id="home"
      className="scroll-mt-20 flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-24 pb-4 md:pb-24 pt-24 md:pt-32 gap-8 z-10"
    >
      <Navbar />

      {/* Left Section */}
      <motion.section
        className="flex-1 text-center md:text-left relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute z-0 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
        <header>
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Sachin Sharma</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-[#c744c4] mb-2">Frontend Developer</h2>
        </header>
        <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
          I build accessible, responsive, and creative web applications using React.js, Tailwind CSS, and JavaScript.
          Currently exploring backend development with Node.js and SpringBoot.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
          <a href="https://github.com/sachin12-say">
            <img src={github} alt="GitHub" className="w-11 h-11" />
          </a>
          <a
            href="https://www.linkedin.com/in/sachin-sharma-6b1529302"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="w-11 h-11" />
          </a>
          <a href="https://www.facebook.com/share/16c4X1HbBE/">
            <img src={facebook} alt="Facebook" className="w-11 h-11" />
          </a>
          <a href="https://www.instagram.com/_rocky_1437/">
            <img src={instagram} alt="Instagram" className="w-11 h-11" />
          </a>
        </div>

        {/* Download CV Button */}
        <a href={cv} download>
          <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
            Download CV
          </button>
        </a>

        {/* Profile Photo Section */}
        <div className="mt-8 flex justify-center md:justify-start">
          <img
            src={myfoto}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#c744c4] shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </div>
      </motion.section>

      {/* Right Section - Hero Image */}
      <motion.figure
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src={imghero}
          alt="Hero Image"
          className="w-full max-w-[480px] h-auto object-cover rounded-lg"
        />
      </motion.figure>
    </main>
  );
}
