import { PricingCardProps } from "@/types";
import Image from "next/image";
import React from "react";
import Star from "../../../public/icons/check-line.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./button";

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
      className="w-full flex flex-col gap-3 sm:gap-5 rounded-2xl sm:rounded-3xl font-Outfit border border-[#77cdff20] bg-gradient-to-b from-[#ffffff05] to-transparent shadow-xl hover:shadow-[#77cdff15] hover:border-[#77cdff40] transition-all duration-300 backdrop-blur-sm"
    >
      <div className="h-full p-4 sm:p-6 md:p-8 w-full flex flex-col gap-4 sm:gap-6 md:gap-8 justify-between">
        <div className="h-full flex flex-col items-start justify-start">
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight">
              {title} <span className="font-bold">{highlightedTitle}</span>
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm lg:text-base font-normal leading-relaxed max-w-[95%] sm:max-w-[90%]">
              {description}
            </p>
          </div>

          <span className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#77cdff40] to-transparent my-3 sm:my-5" />

          <div className="w-full flex flex-col space-y-0.5 sm:space-y-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-full py-1.5 sm:py-2.5 flex gap-2 sm:gap-4 items-start justify-start group"
              >
                <div className="p-1 sm:p-1.5 rounded-full bg-[#77cdff10] group-hover:bg-[#22c55e7e] transition-colors">
                  <Image
                    src={Star}
                    alt="feature"
                    width={16}
                    height={16}
                    className="w-4 h-4 sm:w-[18px] sm:h-[18px] opacity-80"
                  />
                </div>
                <h1 className="text-xs sm:text-sm text-neutral-300 group-hover:text-white transition-colors">
                  {feature}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 sm:gap-4">
          <Link href={callButtonAction} className="w-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Button
                className="w-full py-4 sm:py-6 rounded transition-all duration-300 font-medium text-xs sm:text-sm tracking-wide"
                variant={"outline"}
              >
                Book A Call
              </Button>
            </motion.div>
          </Link>
          <Link href={buyButtonAction} className="w-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Button
                className="w-full py-4 sm:py-6 font-semibold transition-all duration-300 text-xs sm:text-sm tracking-wide"
                variant={"secondary"}
              >
                Click to buy
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
