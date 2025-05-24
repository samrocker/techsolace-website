"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PaperTexture from "../../../public/images/paper-texture.jpg";
import Pen from "../../../public/images/1.png";
import Earth from "../../../public/images/2.png";
import Book from "../../../public/images/3.png";
import { DotPattern } from "../ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <section className="w-full relative overflow-hidden uppercase">
      <Image
        src={PaperTexture}
        alt="hero-bg"
        className="w-full h-full opacity-30 absolute top-0 left-0 z-[-1] object-cover"
      />
      <div className="h-full w-full absolute top-0 left-0">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
      <main className="max-w-[1440px] mx-auto relative px-1 xs:px-2 sm:px-8 lg:px-12">
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-48 xs:top-10 sm:top-20 md:top-32 lg:top-52 left-8 xs:left-12 sm:left-16 md:left-24 z-10"
        >
          <Image
            src={Pen}
            alt="pen-decoration"
            className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto"
          />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-40 xs:top-6 sm:top-6 md:top-20 right-8 xs:right-12 sm:right-16 md:right-28 z-10"
        >
          <Image
            src={Earth}
            alt="earth-decoration"
            className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto"
          />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-36 xs:bottom-10 sm:bottom-6 md:bottom-10 right-8 xs:right-12 sm:right-8 md:right-16 z-10"
        >
          <Image
            src={Book}
            alt="book-decoration"
            className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto"
          />
        </motion.div>
        <div className="min-h-screen w-full flex-center flex-col gap-2 sm:gap-3 text-center py-8 sm:py-12">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="leading-[0.8] tracking-tighter space-y-[0.5rem] xs:space-y-[1rem] sm:space-y-[1.5rem] md:space-y-[2rem]"
            style={{ fontFamily: "var(--font-surt-bold)" }}
          >
            <div className="text-[4rem] xs:text-[4.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[9rem] xl:text-[11rem]">
              Innovate. Design
            </div>

            <div className="text-[4rem] xs:text-[4.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[9rem] xl:text-[11rem] relative">
              <span className="absolute text-[#4F30CC] opacity-30 top-0.5 xs:top-1 sm:top-2">
                Build.
              </span>
              <span className="text-[#f824ff]">Build.</span>{" "}
              <span className="text-white">Scale.</span>
            </div>
            <div
              className="text-[4rem] xs:text-[4.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[9rem] xl:text-[11rem] text-transparent bg-clip-text"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Impact.
            </div>

            <div className="text-[4rem] xs:text-[4.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[9rem] xl:text-[11rem] flex flex-wrap justify-center items-center gap-1 xs:gap-2 sm:gap-4">
              <span className="text-white">Connect.</span>
              <span className="relative p-1 xs:p-2 sm:p-3">
                <span className="text-[#4F30CC] z-10 relative">Transform</span>
                <span className="absolute inset-0 border-[2px] border-dashed border-[#4F30CC] z-0"></span>
              </span>
            </div>
          </motion.h1>
        </div>
      </main>
    </section>
  );
}
