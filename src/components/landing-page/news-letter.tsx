"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import logo from "../../../public/images/Logo.png";
import envelope from "../../../public/images/letter.png";
import Bell from "../../../public/images/bell.png";
import Clock from "../../../public/images/clock.png";

export default function NewLetter() {
  const [email, setEmail] = useState("");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email submitted:", email);
    // Reset form
    setEmail("");
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full min-h-[400px] flex items-center justify-center px-5 mt-32"
    >
      {/* <Image
        src={Bell}
        alt="Bell icon"
        width={150}
        height={150}
        className="absolute top-[10%] left-[10%] opacity-80 hover:opacity-100 transition-opacity"
      />
      <Image
        src={Clock}
        alt="Clock icon"
        width={150}
        height={150}
        className="absolute bottom-[10%] right-[10%] opacity-80 hover:opacity-100 transition-opacity"
      /> */}
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative flex flex-col items-center w-full md:w-1/2 max-w-[350px] mx-auto md:mx-0">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10 bg-white rounded-xl shadow-lg px-6 py-4 flex flex-col items-center w-[260px] border border-gray-200">
              <span className="text-lg font-semibold text-gray-900 text-center">
                When do I need to
                <br />
                file taxes?
              </span>
              <span className="text-sm text-gray-500 mt-2">
                We'll tell you!
              </span>
              <div className="mt-4 bg-[#e6e8f3] rounded-full p-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="#8ecfd8" />
                  <path
                    d="M12 7v6m0 0v2m0-2h2m-2 0H10"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <Image
              src={envelope}
              alt="Envelope"
              width={320}
              height={200}
              className="z-0 w-full max-w-[320px]"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center mt-16 md:mt-0">
            <h2
              className="text-white text-5xl md:text-7xl font-bold uppercase"
              style={{ fontFamily: "var(--font-surt-bold)" }}
            >
              Stay Ahead With the Techsolace Letter
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mt-5">
              Never Miss a Tech Beat From smart tax reminders to branding tips,
              product design inspiration, and software insights—our monthly
              letter delivers valuable, practical updates straight to your
              inbox. No spam. Just real-world guidance to help your business
              grow.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-md gap-3"
            >
              <Input
                type="email"
                placeholder="Your e-mail adress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 h-12 flex-1 rounded-lg px-4 shadow-sm focus:border-[#8ecfd8] focus:ring-2 focus:ring-[#8ecfd8]"
              />
              <Button
                type="submit"
                className="bg-[#3b3472] hover:bg-[#2d285a] text-white font-medium h-12 px-8 rounded-lg shadow-md transition-colors"
              >
                Sign up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
