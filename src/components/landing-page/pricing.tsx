"use client";
import { pricingCardsContent } from "@/constants";
import React, { useRef } from "react";
import PricingCard from "@/components/ui/pricingCard";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Pricing = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="w-full mt-10 md:mt-36 relative"
      id="packages"
    >
      {/* <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#033187]/30 to-transparent rounded-full blur-2xl z-[-1]"></div>
      <div className="absolute top-[20%] right-0 w-64 h-64 bg-gradient-to-br from-[#033187]/30 to-transparent rounded-full blur-2xl z-[-1]"></div> */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/15 via-gray-800/10 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-conic from-transparent via-purple-800/6 to-transparent"></div>
      <main className="max-w-[1440px] m-auto relative">
        <div className="px-4 sm:px-5 py-8 sm:py-12 md:py-16 w-full flex-center flex-col gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="w-full flex-center flex-col gap-4 md:gap-5"
          >
            <h1
              className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient text-center"
              style={{ fontFamily: "var(--font-surt-bold)" }}
            >
              Our Packages
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-sm md:text-lg text-center max-w-[800px] font-Outfit leading-relaxed px-4"
            >
              Discover a range of thoughtfully crafted packages designed to suit
              your unique needs. Whether you're looking for basic essentials or
              premium offerings, our flexible options ensure value, quality, and
              convenience—every step of the way.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8"
          >
            {pricingCardsContent.map((link, key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.2 * key }}
                className="w-full"
              >
                <PricingCard
                  title={link.title}
                  highlightedTitle={link.highlightedTitle}
                  description={link.description}
                  features={link.features}
                  callButtonAction={link.callButtonAction}
                  buyButtonAction={link.buyButtonAction}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Pricing;
