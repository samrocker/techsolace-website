import { PricingCardProps } from "@/types";
import Image from "next/image";
import React from "react";
import Star from "../../../public/icons/Star.png";
import Link from "next/link";

const PricingCard = ({
  title,
  highlightedTitle,
  description,
  features,
  callButtonAction,
  buyButtonAction,
}: PricingCardProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-5 rounded-2xl bg-[#191919] font-Outfit">
      <div className="p-8 w-full flex flex-col gap-3">
        <h1 className="text-white text-2xl lg:text-3xl font-medium">
          {title} <span className="text-[#77CDFF]">{highlightedTitle}</span>
        </h1>
        <p className="text-neutral-300 text-sm lg:text-base font-normal">
          {description}
        </p>
        <span className="w-full h-[1px] bg-[#77cdff80] mt-3" />
        <div className="w-full flex flex-col mt-3">
          {features.map((feature, index) => (
            <div key={index} className="w-full py-2 flex-start gap-3">
              <Image src={Star} alt="feature" width={20} height={20} />
              <h1 className="text-lg text-white">{feature}</h1>
            </div>
          ))}
        </div>

        <div className="w-full mt-5 flex flex-col gap-4">
          <Link href={callButtonAction} className="w-full">
            <button className="w-full py-4 border border-[#77CDFF] rounded-md text-white hover:bg-[#77cdff20] transition-all">
              Book A Call
            </button>
          </Link>

          <Link href={buyButtonAction} className="w-full">
            <button className="w-full py-4 bg-[#77CDFF] rounded-md text-[#191919] font-medium hover:bg-[#5bb8eb] transition-all">
              Click to buy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;