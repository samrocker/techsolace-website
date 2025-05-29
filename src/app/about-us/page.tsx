"use client";
import { Button } from "@/components/ui/button";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  FaChartLine,
  FaLaptopCode,
  FaHashtag,
  FaUserFriends,
  FaPaintBrush,
} from "react-icons/fa";
import { BorderBeam } from "@/components/magicui/border-beam";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
}: {
  icon: any;
  title: string;
  description: string;
  features: string[];
}) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-blue-400 text-2xl group-hover:text-blue-300 transition-colors duration-300" />
        </div>
        <h3 className="text-2xl font-bold group-hover:bg-right transition-all duration-500">
          {title}
        </h3>
      </div>
      
      <p className="text-neutral-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
        {description}
      </p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li 
            key={index} 
            className="flex items-center gap-3 text-neutral-300 group-hover:text-white transition-colors duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <BorderBeam
      duration={6}
      delay={3}
      size={400}
      className="from-transparent via-blue-500/50 to-transparent"
    />
  </div>
);

const AboutUsPage = () => {
  const gridContent = [
    {
      value: "10M+",
      label: "Community users",
    },
    {
      value: "90%",
      label: "Enhance Security",
    },
    {
      value: "+46%",
      label: "Accelerate Growth",
    },
    {
      value: "720",
      label: "Reduce Costs",
    },
  ];

  const videoRef = useRef<HTMLVideoElement>(null);
  const services = [
    {
      icon: FaChartLine,
      title: "Performance Marketing",
      description:
        "Leverage the power of data-driven strategies to maximize your Return on Ad Spend (ROAS). From targeted campaigns to effective ad optimization, we ensure your budget works harder, delivering real, measurable outcomes.",
      features: [
        "ROI-focused ad campaigns",
        "Advanced audience targeting",
        "Real-time analytics and optimization",
      ],
    },
    {
      icon: FaLaptopCode,
      title: "Web Design & Development",
      description:
        "Whether you're launching a brand-new website or enhancing your existing one, we create solutions that captivate audiences and drive results.",
      features: [
        "Custom website development",
        "E-commerce solutions (specialized in Shopify)",
        "Bug fixes and performance optimization",
      ],
    },
    {
      icon: FaHashtag,
      title: "Social Media Marketing",
      description:
        "Engage your audience where they spend the most time—on social media. Our targeted strategies ensure your message resonates and inspires action.",
      features: [
        "Platform-specific campaigns",
        "Content creation and management",
        "Community engagement",
      ],
    },
    {
      icon: FaUserFriends,
      title: "Influencer Marketing",
      description:
        "Harness the power of influencers to tell your brand's story. Our team helps you identify the right voices to amplify your reach and foster genuine customer relationships.",
      features: [
        "Influencer identification and onboarding",
        "Campaign planning and execution",
        "ROI tracking and performance analysis",
      ],
    },
    {
      icon: FaPaintBrush,
      title: "Creative Design Solutions",
      description:
        "Great design is at the heart of every successful campaign. From branding to ad creatives, we deliver designs that captivate and convert.",
      features: [
        "Branding and identity creation",
        "Ad creatives and banners",
        "User-friendly interface designs",
      ],
    },
  ];

  return (
    <section className="min-h-screen">
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-32 flex flex-col gap-16 md:gap-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1
              className="text-white text-5xl md:text-7xl font-bold uppercase leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_auto] animate-gradient"
              style={{ fontFamily: "var(--font-surt-bold)" }}
            >
              Empowering Business with Tech
            </h1>
          </motion.div>

          {/* Content Section */}
          <div className="w-full flex flex-col lg:flex-row gap-10 items-center">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-[1.5] relative aspect-video rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300"
            >
              <video
                ref={videoRef}
                src="https://ik.imagekit.io/inxr5mngi/brandVideo.mp4?updatedAt=1747785846921"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-[1] flex-center flex-col gap-5"
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                At Techsolace, we build smart, scalable, and secure digital
                solutions that drive results. From powerful software platforms
                and user-centric mobile apps to bold brand identities and
                seamless UI/UX experiences—our goal is to elevate your business
                with future-ready technology and creative strategy.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-800">
                {gridContent.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-center group hover:transform hover:scale-105 transition-transform duration-300"
                  >
                    <p className="text-3xl md:text-4xl font-bold tracking-tight">
                      {item.value}
                    </p>
                    <p className="text-sm md:text-base mt-2 text-gray-400 group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="w-full flex flex-col sm:flex-row gap-4 pt-8"
              >
                <Button
                  size={"lg"}
                  className="font-bold py-6 rounded-3xl transition-all duration-300 group"
                  variant={"default"}
                >
                  View Our Works
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size={"lg"}
                  className="font-bold py-6 rounded-3xl border-2 hover:bg-white/10 transition-all duration-300"
                  variant={"outline"}
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full flex-center flex-col gap-20 mt-10">
            <div className="w-full flex-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto"
              >
                <h1
                  className="text-white text-5xl md:text-7xl font-bold uppercase leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
                  style={{ fontFamily: "var(--font-surt-bold)" }}
                >
                  Our Services
                </h1>
              </motion.div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutUsPage;
