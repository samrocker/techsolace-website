"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const NewLetter = () => {
  return (
    <section className="w-full mt-32 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0" />
      
      <main className="max-w-[1440px] m-auto relative z-10">
        <div className="px-5 py-20 w-full flex-between flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full flex flex-col gap-8 items-start justify-center"
          >
            <h1
              className="text-white text-5xl md:text-8xl lg:text-8xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"
              style={{ fontFamily: "var(--font-surt-bold)" }}
            >
              News Letter
            </h1>
            <p className="text-gray-300 text-base md:text-xl text-left max-w-[800px] font-Outfit leading-relaxed">
              Stay in the loop with our latest updates, exclusive offers, and
              behind-the-scenes content. Subscribe to our newsletter and be the
              first to know what's new, exciting, and coming soon!
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full flex flex-col gap-6 items-end justify-start"
          >
            <div className="w-full flex flex-col gap-4 items-end">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-[400px] rounded-full bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-blue-500 transition-all duration-300 hover:bg-white/10"
              />
              <Button 
                className="rounded-full px-8 py-6 w-40 font-medium transition-all duration-300 hover:scale-105 text-white"
                variant={"secondary"}
              >
                Subscribe Now
              </Button>
            </div>
            <div className="w-full flex-end gap-3">
              <Button 
                className="rounded-full px-8 py-6 w-40 text-white font-medium transition-all duration-300 hover:bg-white/10 border-white/20 hover:border-white/40"
                variant={"outline"}
              >
                Join Discord
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default NewLetter;
