"use client"
import React from "react";
import { Button } from "../ui/button";
import retroGrid from "../../../public/images/retro-grid.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Banner = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="w-full mt-10 relative">
      <main className="max-w-[1440px] m-auto">
        <div className="py-10 px-5 min-h-fit w-full flex-center">
          <div ref={ref} className="px-5 py-20 w-full flex-center flex-col gap-5 rounded-3xl relative">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-5xl lg:text-6xl text-white text-center font-bold font-Outfit max-w-[600px]"
            >
              Tech Partnership
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white text-center max-w-[700px] font-Outfit"
            >
              Ready with your business model? Submit a query and share your
              business model with us. We will handle your tech side completely
              from start to finish and provide valuable business suggestions to
              help you succeed.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-center gap-5"
            >
              <Button
                className="px-7 py-7 text-lg flex-center gap-2 text-black font-medium font-Outfit mt-5"
                variant={"default"}
              >
                See Pricing
              </Button>
              <Button
                className="px-7 py-7 text-lg flex-center gap-2 font-medium font-Outfit mt-5"
                variant={"secondary"}
              >
                Join Discord
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.75 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-full h-[40%] absolute bottom-0 left-0 z-[-1]"
            >
              <Image
                src={retroGrid}
                alt="retro-grid"
                width={1920}
                height={1080}
                className="w-full h-full object-cover invert opacity-75 md:opacity-50"
                priority
              />
            </motion.div>
            <div className="w-full h-full absolute bg-[#111111] z-[-2] rounded-3xl"></div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Banner;
