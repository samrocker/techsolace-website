import { PricingCardProps } from "@/types";
import Image from "next/image";
import React from "react";
import Star from "../../../public/icons/Star.png";
import Link from "next/link";
import { motion } from "framer-motion";

const PricingCard = ({
  title,
  highlightedTitle,
  description,
  features,
  callButtonAction,
  buyButtonAction,
}: PricingCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full flex flex-col gap-5 rounded-2xl font-Outfit border border-[#77cdff20] shadow-lg hover:shadow-[#77cdff10] hover:border-[#77cdff40] transition-all duration-300"
    >
      <div className="h-full p-8 w-full flex flex-col gap-6 justify-between">
        <div className="h-full flex flex-col items-start justify-start">
          <div className="space-y-4">
            <h1 className="text-white text-2xl lg:text-3xl font-semibold tracking-tight">
              {title} <span className="text-[#77CDFF] font-bold">{highlightedTitle}</span>
            </h1>
            <p className="text-neutral-400 text-sm lg:text-base font-normal leading-relaxed">
              {description}
            </p>
          </div>
          
          <span className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#77cdff40] to-transparent my-6" />
          
          <div className="w-full flex flex-col space-y-3">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-full py-2 flex gap-3 items-start justify-start group"
              >
                <div className="p-1 rounded-full bg-[#77cdff10] group-hover:bg-[#77cdff20] transition-colors">
                  <Image src={Star} alt="feature" width={16} height={16} className="opacity-80" />
                </div>
                <h1 className="text-sm text-neutral-300 group-hover:text-white transition-colors">{feature}</h1>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 pt-4">
          <Link href={callButtonAction} className="w-full">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 border border-[#77CDFF] rounded-lg text-white hover:bg-[#77cdff10] transition-all duration-300 font-medium"
            >
              Book A Call
            </motion.button>
          </Link>
          <Link href={buyButtonAction} className="w-full">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-[#77CDFF] rounded-lg text-[#191919] font-semibold hover:bg-[#5bb8eb] transition-all duration-300 shadow-lg shadow-[#77cdff20]"
            >
              Click to buy
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard