"use client"
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
    <section ref={sectionRef} className="w-full mt-32">      
      <main className="max-w-[1440px] m-auto relative">
        <div className="px-5 py-8 sm:py-12 md:py-16 w-full flex-center flex-col gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="w-full flex-center flex-col gap-5"
          >
            <h1
              className="text-white text-5xl md:text-7xl lg:text-8xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"
              style={{ fontFamily: "var(--font-surt-bold)" }}
            >
              Our Packages
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-sm md:text-lg text-center max-w-[800px] font-Outfit leading-relaxed"
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
            className="w-full flex items-center justify-center gap-10"
          >
            {pricingCardsContent.map((link, key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 * key }}
                className="w-full max-w-[400px]"
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
