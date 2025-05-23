"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "../ui/marquee";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image1 from "../../../public/images/nut.png";
import Image2 from "../../../public/images/sping.png";
import { motion, useInView } from "framer-motion";

interface ProjectCard {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const projects: ProjectCard[] = [
  {
    title: "Plenty Cred",
    description:
      "Lightning-fast upgrades with Plenty Cred - finance simplified unlike ever before! Cash-in-bank in minutes, Fastest credits processing, Borrow and repay at your convenience, One-time application for multiple credits",
    image:
      "https://www.techsolace.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffrkyx5s3%2Fproduction%2Fd0dcf37871fdf7f79f2654c639aa8f20d14bdf99-1902x924.png%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75",
    category: "Web App",
    link: "https://plentycred.co.in/",
  },
  {
    title: "Vigor EBike",
    description:
      "Riding with Vigor is an adventure like no other, thanks to their ingenious use of 20 x 4-inch tires that effortlessly conquer both the rugged terrain of off-road paths and the smooth pavement of city streets. With this exceptional combination, every journey is an opportunity to explore new horizons and experience the thrill of the ride like never before.",
    image:
      "https://www.techsolace.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffrkyx5s3%2Fproduction%2F1c583c529ef167b9c956d8c86ca114fed88dd4cd-1897x946.png%3Ffit%3Dmax%26auto%3Dformat&w=1080&q=75",
    category: "Web App",
    link: "https://vigorebike.in/",
  },
  {
    title: "Earn Charge",
    description:
      "Instant Transactions and Secure Payments. Recharge is fast and easy to use. So, a user can look for a suitable recharge plan and complete the recharge in just a few clicks. It does not even take a minute. Recharge is 100% safe for making your payments.",
    image:
      "https://www.techsolace.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffrkyx5s3%2Fproduction%2F3fcb7d86ff2c5df65b31210ad9d699e17b48c848-1897x949.png%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75",
    category: "Web App",
    link: "https://earncharge.in/",
  },
  //   {
  //     title: "Earn Charge",
  //     description:
  //       "Instant Transactions and Secure Payments. Recharge is fast and easy to use. So, a user can look for a suitable recharge plan and complete the recharge in just a few clicks. It does not even take a minute. Recharge is 100% safe for making your payments.",
  //     image: "https://www.techsolace.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffrkyx5s3%2Fproduction%2F3fcb7d86ff2c5df65b31210ad9d699e17b48c848-1897x949.png%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75",
  //     category: "UI/UX Design",
  //     link: "/projects/dashboard",
  //   },
];

const Works = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 mt-20">
      <main className="max-w-[1440px] m-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={Image1}
            alt="earth-decoration"
            className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto absolute top-10 xs:top-10 sm:top-20 md:top-0 lg:bottom-0 right-5 xs:right-12 sm:right-16 md:right-20 z-[-1]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={Image2}
            alt="pen-decoration"
            className="w-16 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto absolute top-10 xs:top-6 sm:top-6 md:top-20 left-5 xs:left-12 sm:left-16 md:left-20 z-[-1]"
          />
        </motion.div>
        <div className="px-5 py-5 w-full flex-center flex-col gap-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="w-full flex-center flex-col gap-5"
          >
            <h1
              className="text-white text-5xl md:text-8xl lg:text-8xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"
              style={{ fontFamily: "var(--font-surt-bold)" }}
            >
              Our Works
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-sm md:text-lg text-center max-w-[800px] font-Outfit leading-relaxed"
            >
              We create thoughtful, effective solutions across design and
              digital. Each project reflects our focus on quality, creativity,
              and results. Take a look at what we've built.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full relative"
          >
            {/* Desktop Marquee */}
            <div className="hidden lg:block">
              <Marquee pauseOnHover className="[--duration:20s] w-full">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
              <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-black/70 to-transparent z-10"></div>
            </div>

            {/* Mobile/Tablet Carousel */}
            <div className="lg:hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {projects.map((project, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                      <ProjectCard project={project} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

const ProjectCard = ({ project }: { project: ProjectCard }) => {
  const cardRef = React.useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="group relative border border-white/20 rounded-xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm mx-4 max-w-[500px] bg-black/20"
    >
      <div className="relative h-64 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="max-w-fit text-blue-400 text-sm font-medium px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
            {project.category}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
        </div>

        <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <Link
          href={project.link}
          target="_blank"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 group/link bg-blue-500/10 px-4 py-2 rounded-lg hover:bg-blue-500/20"
        >
          View Project
          <svg
            className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default Works;
