import { pricingCardsContent } from "@/constants";
import React from "react";
import PricingCard from "@/components/ui/pricingCard";
import Image from "next/image";

const Pricing = () => {
  return (
    <section className="w-full mt-32">
      <main className="max-w-[1440px] m-auto relative">
        <div className="px-5 py-8 sm:py-12 md:py-16 w-full flex-center flex-col gap-20">
          <div className="w-full flex-center flex-col gap-5">
            <h1
              className="text-white text-5xl md:text-8xl lg:text-8xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"
              style={{ fontFamily: "var(--font-surt-bold)" }}
            >
              Our Packages
            </h1>
            <p className="text-gray-300 text-sm md:text-lg text-center max-w-[800px] font-Outfit leading-relaxed">
              Discover a range of thoughtfully crafted packages designed to suit
              your unique needs. Whether you're looking for basic essentials or
              premium offerings, our flexible options ensure value, quality, and
              convenience—every step of the way.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 place-items-center max-w-[1250px]">
            {pricingCardsContent.map((link, key) => (
              <PricingCard
                title={link.title}
                highlightedTitle={link.highlightedTitle}
                description={link.description}
                features={link.features}
                callButtonAction={link.callButtonAction}
                buyButtonAction={link.buyButtonAction}
                key={key}
              />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Pricing;
