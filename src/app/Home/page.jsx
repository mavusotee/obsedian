'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { ArrowBigLeft, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItems = [
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/Services" },
    { name: "Projects", href: "/careers" },
    { name: "Gallery", href: "/careers" },
  ];

  return (
    <section className='w-full h-screen relative overflow-x-hidden'>
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat brightness-[0.35] z-0"
        style={{
          backgroundImage: "url('/pexels-apasaric-1758672.jpg')"
        }}
      />
      
      <nav className="relative flex items-center justify-between p-6 md:p-12 z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col font-Host_Grotesk text-xl text-white"
        >
          <span>OBSEDIAN.STUDIO</span> 
        </motion.div>

        {/* Desktop Navigation */}
        <ul className=" md:flex font-poppins items-center justify-center gap-8">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-md font-poppins w-[70] h-[60] relative p-3 bg-[#292929]/70 text-white text-center cursor-pointer hover:bg-[#363638] transition-colors flex items-center justify-center z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X size={24} /> : 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="size-8"
              >
                <path 
                  fillRule="evenodd" 
                  d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" 
                  clipRule="evenodd" 
                  className="text-4xl"
                />
              </svg>
            }
          </motion.span>
        </ul>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 transition-opacity duration-300 bg-black/30 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div
        className={`h-full fixed top-0 right-0 w-3/4 bg-zinc-800/100 p-12 z-50 transform transition-transform duration-[1500ms] ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col absolute gap-[2rem] items-start justify-center top-[5rem]">
          {NavItems.map((items) => (
            <Link
              className=" text-[4rem]  md:text-[4rem] text-white uppercase flex flex-col top-[5rem] font-Host_Grotesk font-bold tracking-tighter leading-[1] hover:text-[#545454] transition-colors"
              key={items.name}
              href={items.href}
            >
              {items.name}
            </Link>
          ))}
        </div>

        <div>
          <span className="text-white text-[1.5rem] font-Inter font-semibold leading-[1]">
            © 2023 OBSEDIAN.STUDIO
          </span>

          <div className="flex gap-4 mt-8">
              <ul className=' flex gap-[1rem] text-uppercase text-[1rem]'>
                <li>INSTAGRAM</li>
                <li>LINKEDIN</li>
                <li>FACEBOOK</li>
              </ul>
          </div>
        </div>
      </div>

      {/* Main Title */}
      <div className="text-6xl left-[1rem] md:text-[13rem] flex flex-col font-anton tracking-tighter leading-[1] absolute bottom-8 md:bottom-0 text-white md:left-[2rem] overflow-hidden font-semibold w-[80%]">
        <span>OBSEDIAN</span>
      </div>

     
    </section>
  )
}

export default page