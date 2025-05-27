"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import logo from "../../../public/images/Logo.png";
import Gradient from "../../../public/images/gradient-background-1.png";
import React from "react";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    tap: { scale: 0.98 }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="relative min-h-screen">
      <main className="max-w-[1200px] m-auto">
        <motion.div 
          className="px-4 sm:px-5 py-5 min-h-screen w-full flex-center flex-col gap-6 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="w-full flex-start"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-sora"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              We're here to help
            </motion.h1>
          </motion.div>

          <motion.div 
            className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10"
            variants={itemVariants}
          >
            {/* Form Section */}
            <motion.div 
              className="w-full lg:flex-[1] flex flex-col gap-5 sm:gap-7 mt-5 sm:mt-10"
              variants={formVariants}
            >
              <motion.div 
                className="flex flex-col gap-3"
                variants={inputVariants}
              >
                <Label htmlFor="name">Name</Label>
                <motion.div
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <Input
                    type="text"
                    id="name"
                    placeholder="e.g. John Smith"
                    className="w-full bg-white/5 border-none py-4 sm:py-5"
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                className="flex flex-col gap-3"
                variants={inputVariants}
              >
                <Label htmlFor="email">Email</Label>
                <motion.div
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <Input
                    type="email"
                    id="email"
                    placeholder="e.g. example@gmail.com"
                    className="w-full bg-white/5 border-none py-4 sm:py-5"
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                className="flex flex-col gap-3"
                variants={inputVariants}
              >
                <Label htmlFor="message">Message</Label>
                <motion.div
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <Textarea
                    id="message"
                    placeholder="e.g. Let us know how we can help"
                    className="min-h-[150px] sm:min-h-[200px] max-h-[200px] w-full bg-white/5 border-none py-4 sm:py-5"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Button className="rounded-full w-full sm:w-auto">
                  Send Message
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div 
              className="w-full lg:flex-[1] flex-col gap-5"
              variants={cardVariants}
            >
              <motion.div 
                className="h-[350px] sm:h-[450px] w-full max-w-[500px] mx-auto flex flex-col backdrop-blur-md bg-gradient-to-br from-gray-100/10 to-gray-100/5 rounded-3xl items-start justify-between px-6 sm:px-8 py-8 sm:py-10 border border-gray-200/10 shadow-lg"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-full flex-start"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Image
                    src={logo}
                    alt="TechSolace Logo"
                    width={1920}
                    height={1080}
                    className="h-8 sm:h-10 w-auto"
                  />
                </motion.div>

                <motion.div 
                  className="w-full flex flex-col items-start justify-start gap-6 sm:gap-7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, staggerChildren: 0.1 }}
                >
                  <motion.div 
                    className="flex flex-col gap-4"
                    variants={contactInfoVariants}
                  >
                    <h2 className="text-white text-xl sm:text-2xl font-sora font-medium">
                      Contact Information
                    </h2>
                    <div className="flex flex-col gap-3 text-gray-300">
                      <motion.p 
                        className="flex items-center gap-3 group"
                        variants={contactInfoVariants}
                        whileHover="hover"
                      >
                        <span className="text-white font-medium">Email:</span>
                        <span className="group-hover:text-white transition-colors">
                          contact@techsolace.com
                        </span>
                      </motion.p>
                      <motion.p 
                        className="flex items-center gap-3 group"
                        variants={contactInfoVariants}
                        whileHover="hover"
                      >
                        <span className="text-white font-medium">Phone:</span>
                        <span className="group-hover:text-white transition-colors">
                          +1 (555) 123-4567
                        </span>
                      </motion.p>
                      <motion.p 
                        className="flex items-center gap-3 group"
                        variants={contactInfoVariants}
                        whileHover="hover"
                      >
                        <span className="text-white font-medium">Address:</span>
                        <span className="group-hover:text-white transition-colors">
                          123 Tech Street, Silicon Valley, CA 94043
                        </span>
                      </motion.p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col gap-4"
                    variants={contactInfoVariants}
                  >
                    <h2 className="text-white text-xl sm:text-2xl font-sora font-medium">
                      Business Hours
                    </h2>
                    <div className="flex flex-col gap-3 text-gray-300">
                      <motion.p 
                        className="flex items-center gap-3"
                        variants={contactInfoVariants}
                        whileHover="hover"
                      >
                        <span className="text-white font-medium">Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </motion.p>
                      <motion.p 
                        className="flex items-center gap-3"
                        variants={contactInfoVariants}
                        whileHover="hover"
                      >
                        <span className="text-white font-medium">Saturday - Sunday:</span>
                        <span>Closed</span>
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </section>
  );
};

export default AboutUsPage;