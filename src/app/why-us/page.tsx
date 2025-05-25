import { Button } from "@/components/ui/button";
import HappyClients from "@/components/ui/happy-clients";
import Image from "next/image";
import React from "react";

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
    <div className="w-full sm:w-full flex flex-col gap-3 sm:gap-4 bg-white/5 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all justify-between">
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
    </div>
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
      image: "/testimonials/sarah.jpg",
      text: "This platform made building my first website incredibly easy! The drag-and-drop interface is super intuitive, and the templates look amazing. I had my blog up and running in no time!",
    },
    {
      name: "James Carter",
      role: "Coffee Shop Owner",
      image: "/testimonials/james.jpg",
      text: "As a small business owner, I needed a tool that was affordable and easy to use. This website builder ticks all the boxes—great templates, SEO features, and even e-commerce options. My business website looks professional now!",
    },
    {
      name: "Emma Rodriguez",
      role: "Photographer",
      image: "/testimonials/emma.jpg",
      text: "I'm a freelance photographer, and this builder helped me create a stunning portfolio website. The gallery features are perfect for showcasing my work, and I've already gained new clients through it.",
    },
    {
      name: "Alex Nguyen",
      role: "Online Store Owner",
      image: "/testimonials/alex.jpg",
      text: "I use this for my online store, and the e-commerce tools are excellent—inventory management, payment gateways, and even shipping options. It's user-friendly, though I wish there were more customization options.",
    },
    {
      name: "Linda Patel",
      role: "Freelance Writer",
      image: "/testimonials/linda.jpg",
      text: "I have no coding experience, but I didn't need it with this builder! The step-by-step process and built-in tutorials were a lifesaver. I now have a professional website that I'm proud of.",
    },
    {
      name: "Michael Brown",
      role: "Web Developer",
      image: "/testimonials/michael.jpg",
      text: "It's great for basic websites, but as a developer, I found it a bit limiting. Custom coding options are restricted, and the integrations could be expanded. Still, a solid choice for non-technical users.",
    },
    {
      name: "Anonymous",
      role: "User",
      image: "/testimonials/user1.jpg",
      text: "I ran into a few issues setting up my website, but the customer support team was fantastic. They resolved my problems quickly and even gave me tips on improving my site's design!",
    },
    {
      name: "Anonymous",
      role: "Nonprofit Member",
      image: "/testimonials/user2.jpg",
      text: "Our nonprofit organization needed a website to share updates and accept donations. This platform made it easy to build a site that meets our needs without breaking the budget.",
    },
    {
      name: "Anonymous",
      role: "Startup Founder",
      image: "/testimonials/user3.jpg",
      text: "As a startup founder, I needed an affordable, professional website. This builder delivered everything I needed, from SEO tools to mobile responsiveness. It's not as customizable as WordPress, but it's a great value.",
    },
  ];

  return (
    <section className="min-h-screen text-white mt-4 sm:mt-10">
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-10 sm:py-20">
        <div className="flex flex-col gap-10 sm:gap-20">
          {/* Stats and CTA Section */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                250k+
              </h1>
              <p className="text-lg sm:text-xl text-gray-300">
                Websites created in the last 2 years
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8">
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
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`testimonial-1-${index}`}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default WhyUsPage;
