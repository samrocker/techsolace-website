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
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full h-[600px] flex flex-col gap-5 rounded-2xl font-Outfit border"
    >
      <div className="h-full p-8 w-full flex flex-col gap-3 justify-between">
        <div className="h-full flex flex-col items-start justify-start">
        <h1 className="text-white text-2xl lg:text-3xl font-medium">
          {title} <span className="text-[#77CDFF]">{highlightedTitle}</span>
        </h1>
        <p className="text-neutral-300 text-sm lg:text-base font-normal">
          {description}
        </p>
        <span className="w-full h-[1px] bg-[#77cdff80] mt-5" />
        <div className="w-full flex flex-col mt-5">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-full py-2 flex gap-3 items-start justify-start"
            >
              <Image src={Star} alt="feature" width={20} height={20} />
              <h1 className="text-sm text-white">{feature}</h1>
            </motion.div>
          ))}
        </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <Link href={callButtonAction} className="w-full">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 border border-[#77CDFF] rounded-md text-white hover:bg-[#77cdff20] transition-all"
            >
              Book A Call
            </motion.button>
          </Link>
          <Link href={buyButtonAction} className="w-full">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-[#77CDFF] rounded-md text-[#191919] font-medium hover:bg-[#5bb8eb] transition-all"
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