"use client"
import Image from "next/image";
import React from "react";
import Siren from "../../../public/images/question mark.png";
import PaperPlane from "../../../public/images/plane.png";
import { motion, useInView } from "framer-motion";

const about = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full relative mt-36">
      {/* Gradient Balls */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.6 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-60"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.4 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-3xl opacity-40"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.3 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-1/3 right-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-30"
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={PaperPlane}
          alt="earth-decoration"
          className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto absolute top-10 xs:top-10 sm:top-20 md:top-32 lg:top-20 right-5 xs:right-12 sm:right-16 md:right-24 lg:right-48 z-[-1]"
        />
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={Siren}
          alt="pen-decoration"
          className="w-16 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto absolute top-10 xs:top-6 sm:top-6 md:top-0 lg:top-10 left-5 xs:left-12 sm:left-16 md:left-24 lg:left-48 z-[-1]"
        />
      </motion.div>
      {/* <Image
        src={Book}
        alt="book-decoration"
        className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto absolute bottom-32 xs:bottom-10 sm:bottom-6 md:bottom-10 right-8 xs:right-12 sm:right-8 md:right-16 z-[-1]"
      /> */}
      <main className="max-w-[1440px] m-auto relative">
        <div className="px-5 py-10 w-full flex-center flex-col gap-16">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-5xl md:text-8xl lg:text-8xl font-bold uppercase"
            style={{ fontFamily: "var(--font-surt-bold)" }}
          >
            Peek Behind the Pixels
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-sm md:text-lg lg:text-4xl text-center max-w-[1000px] font-Outfit"
          >
            Techsolace is a technology and branding company that creates
            software and visual identities for businesses. We focus on
            practical, reliable solutions—both in code and design. With over 30
            completed projects, our portfolio includes custom software, mobile
            and web apps, e-commerce sites, portfolio websites, brand
            identities, logos, and digital content.
          </motion.p>
        </div>
      </main>
    </section>
  );
};

export default about;
