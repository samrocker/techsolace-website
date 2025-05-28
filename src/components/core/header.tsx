"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../public/images/Logo.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Handle hash-based navigation
    if (href.includes('#')) {
      const hash = href.split('#')[1];
      const element = document.getElementById(hash);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // If element not found, navigate to the page with hash
        window.location.href = href;
      }
    } else {
      // Handle regular page navigation
      const targetId = href.replace('/', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // If element not found, navigate to the page
        window.location.href = href;
      }
    }
  };

  // Add effect to handle initial hash navigation
  useEffect(() => {
    const handleHashNavigation = () => {
      // Wait for the page to be fully loaded
      setTimeout(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 100); // Small delay to ensure DOM is ready
    };

    // Handle initial hash navigation
    handleHashNavigation();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { 
      opacity: 0,
      y: -50,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1
      }
    }
  };

  const navItemVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const menuItemVariants = {
    closed: { 
      opacity: 0,
      x: -50,
      scale: 0.95
    },
    open: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        opacity: { duration: 0.6 }
      }}
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 font-Outfit ${
        isScrolled ? "bg-[#0A0A0A]/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <main className="max-w-[1000px] m-auto">
        {/* Desktop navigation */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className="px-5 py-5 w-full hidden md:flex-between gap-5"
        >
          <motion.div 
            variants={navItemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <Link 
              href={"/why-us"} 
              className="text-md font-normal text-white/75"
              onClick={(e) => handleSmoothScroll(e, "/why-us")}
            >
              testimonials
            </Link>
          </motion.div>
          <motion.div 
            variants={navItemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <Link 
              href={"/"} 
              className="text-md font-normal text-white/75"
              onClick={(e) => handleSmoothScroll(e, "/#packages")}
            >
              Our Packages
            </Link>
          </motion.div>
          <motion.div 
            className="flex-center gap-1"
            variants={navItemVariants}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.5 }
            }}
            whileTap={{ 
              scale: 0.9,
              transition: { duration: 0.1 }
            }}
          >
            <Link href={"/"} onClick={(e) => handleSmoothScroll(e, "/#hero")}>
              <Image src={logo} alt="logo" width={40} height={40} />
            </Link>
          </motion.div>
          <motion.div 
            variants={navItemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <Link 
              href={"/#about"} 
              className="text-md font-normal text-white/75"
              onClick={(e) => handleSmoothScroll(e, "/#about")}
            >
              About Us
            </Link>
          </motion.div>
          <motion.div 
            variants={navItemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <Link 
              href={"/contact-us"} 
              className="text-md font-normal text-white/75"
              onClick={(e) => handleSmoothScroll(e, "/contact-us")}
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile navigation */}
        <div className="px-5 py-5 w-full flex justify-between items-center md:hidden">
          <motion.div 
            className="flex-center gap-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
            whileTap={{ 
              scale: 0.9,
              transition: { duration: 0.1 }
            }}
          >
            <Image src={logo} alt="logo" width={40} height={40} />
          </motion.div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <motion.button
                className="relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                <motion.span
                  className="h-[1px] w-6 bg-white rounded-full absolute"
                  animate={isOpen ? 
                    { rotate: 45, y: 0, transition: { duration: 0.3 } } : 
                    { rotate: 0, y: -5, transition: { duration: 0.3 } }
                  }
                />
                <motion.span
                  className="h-[1px] w-6 bg-white rounded-full absolute"
                  animate={isOpen ? 
                    { opacity: 0, scale: 0, transition: { duration: 0.2 } } : 
                    { opacity: 1, scale: 1, transition: { duration: 0.2 } }
                  }
                />
                <motion.span
                  className="h-[1px] w-6 bg-white rounded-full absolute"
                  animate={isOpen ? 
                    { rotate: -45, y: 0, transition: { duration: 0.3 } } : 
                    { rotate: 0, y: 5, transition: { duration: 0.3 } }
                  }
                />
              </motion.button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#121212] text-white border-r border-white/10">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center py-8 border-b border-white/10">
                  <motion.div 
                    className="flex-center gap-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }}
                  >
                    <Image src={logo} alt="logo" width={50} height={50} />
                  </motion.div>
                </div>
                <motion.div 
                  className="flex flex-col gap-8 mt-10 px-4"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { 
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                >
                  <motion.div variants={menuItemVariants}>
                    <SheetClose asChild>
                      <Link 
                        href={"/why-us"} 
                        className="text-xl font-medium text-white/90 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                        onClick={(e) => handleSmoothScroll(e, "/why-us")}
                      >
                        <span className="w-1 h-1 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-200"></span>
                        testimonials
                      </Link>
                    </SheetClose>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <SheetClose asChild>
                      <Link 
                        href={"/"} 
                        className="text-xl font-medium text-white/90 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                        onClick={(e) => handleSmoothScroll(e, "/#packages")}
                      >
                        <span className="w-1 h-1 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-200"></span>
                        Our Packages
                      </Link>
                    </SheetClose>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <SheetClose asChild>
                      <Link 
                        href={"/#about"} 
                        className="text-xl font-medium text-white/90 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                        onClick={(e) => handleSmoothScroll(e, "/#about")}
                      >
                        <span className="w-1 h-1 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-200"></span>
                        About Us
                      </Link>
                    </SheetClose>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <SheetClose asChild>
                      <Link 
                        href={"/contact-us"} 
                        className="text-xl font-medium text-white/90 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                        onClick={(e) => handleSmoothScroll(e, "/contact-us")}
                      >
                        <span className="w-1 h-1 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-200"></span>
                        Contact Us
                      </Link>
                    </SheetClose>
                  </motion.div>
                </motion.div>
                <div className="mt-auto p-4 border-t border-white/10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-white/50 text-center"
                  >
                    © 2024 TechSolace. All rights reserved.
                  </motion.div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </main>
    </motion.section>
  );
};

export default Header;