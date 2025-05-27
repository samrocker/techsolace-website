"use client";
import { Button } from "@/components/ui/button";
import HappyClients from "@/components/ui/happy-clients";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({
  name,
  image,
  text,
  role,
}: {
  name: string;
  image: string;
  text: string;
  role: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full sm:w-full flex flex-col gap-3 sm:gap-4 bg-white/5 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all justify-between relative"
    >
      <div
        className="absolute top-0 right-0 w-[300px] h-[250px] pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 80% 20%, rgba(0,123,255,0.15) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(147,51,234,0.1) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 40%)
          `,
          filter: "blur(60px)",
          opacity: 0.4,
          mixBlendMode: "screen"
        }}
      />
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
        {text}
      </p>
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src={image}
          alt={name}
          width={40}
          height={40}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm sm:text-base font-medium text-white">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const WhyUsPage = () => {
  const clientAvatars = [
    { src: "/images/example-client-1.png", alt: "Client 1" },
    { src: "/images/example-client-2.png", alt: "Client 2" },
    { src: "/images/example-client-3.png", alt: "Client 3" },
  ];
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Blogger",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      text: "This platform made building my first website incredibly easy! The drag-and-drop interface is super intuitive, and the templates look amazing. I had my blog up and running in no time!",
    },
    {
      name: "James Carter",
      role: "Coffee Shop Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "As a small business owner, I needed a tool that was affordable and easy to use. This website builder ticks all the boxes—great templates, SEO features, and even e-commerce options. My business website looks professional now!",
    },
    {
      name: "Emma Rodriguez",
      role: "Photographer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      text: "I'm a freelance photographer, and this builder helped me create a stunning portfolio website. The gallery features are perfect for showcasing my work, and I've already gained new clients through it.",
    },
    {
      name: "Alex Nguyen",
      role: "Online Store Owner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      text: "I use this for my online store, and the e-commerce tools are excellent—inventory management, payment gateways, and even shipping options. It's user-friendly, though I wish there were more customization options.",
    },
    {
      name: "Linda Patel",
      role: "Freelance Writer",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
      text: "I have no coding experience, but I didn't need it with this builder! The step-by-step process and built-in tutorials were a lifesaver. I now have a professional website that I'm proud of.",
    },
    {
      name: "Michael Brown",
      role: "Web Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      text: "It's great for basic websites, but as a developer, I found it a bit limiting. Custom coding options are restricted, and the integrations could be expanded. Still, a solid choice for non-technical users.",
    },
    {
      name: "Anonymous",
      role: "User",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      text: "I ran into a few issues setting up my website, but the customer support team was fantastic. They resolved my problems quickly and even gave me tips on improving my site's design!",
    },
    {
      name: "Anonymous",
      role: "Nonprofit Member",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      text: "Our nonprofit organization needed a website to share updates and accept donations. This platform made it easy to build a site that meets our needs without breaking the budget.",
    },
    {
      name: "Anonymous",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=400&h=400&fit=crop",
      text: "As a startup founder, I needed an affordable, professional website. This builder delivered everything I needed, from SEO tools to mobile responsiveness. It's not as customizable as WordPress, but it's a great value.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen text-white mt-16"
    >
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-10 sm:py-20">
        <div className="flex flex-col gap-10 sm:gap-20">
          {/* Stats and CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 sm:gap-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                250k+
              </h1>
              <p className="text-lg sm:text-xl text-gray-300">
                Websites created in the last 2 years
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="flex-center shadow-xl rounded-full max-w-fit">
                <HappyClients count={50} avatars={clientAvatars} />
              </div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Don't just take our word for it — hear from people who've
                transformed their ideas into stunning websites using our
                platform.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button
                  variant="default"
                  className="bg-white text-black hover:bg-gray-200 px-4 sm:px-6 py-4 sm:py-6 text-sm sm:text-base"
                >
                  Start Today
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-4 sm:px-6 py-4 sm:py-6 text-sm sm:text-base"
                >
                  Read Success Stories
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`testimonial-1-${index}`}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                text={testimonial.text}
              />
            ))}
          </motion.div>
        </div>
      </main>
    </motion.section>
  );
};

export default WhyUsPage;
