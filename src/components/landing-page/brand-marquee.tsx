import { cn } from "@/lib/utils";
import React from "react";
import { Marquee } from "../ui/marquee";
import Image from "next/image";

const BrandLogo = ({ logo, name }: { logo: string; name: string }) => {
  return (
    <Image
      src={logo}
      alt={name}
      width={1920}
      height={1080}
      className="w-auto h-10 md:h-20 object-contain"
    />
  );
};

const BrandMarquee = () => {
  const brands = [
    {
      name: "Brand 1",
      logo: "/images/brand-logo-1.png",
    },
    {
      name: "Brand 2",
      logo: "/images/brand-logo-2.png",
    },
    {
      name: "Brand 3",
      logo: "/images/brand-logo-3.png",
    },
    {
      name: "Brand 4",
      logo: "/images/brand-logo-4.png",
    },
  ];

  return (
    <section className="mt-16 md:mt-36">
      <main>
        <div className="w-full flex-center flex-col gap-10">
          <div className="w-full flex-center flex-col gap-5">
            <h1
              className="text-white text-5xl md:text-8xl lg:text-8xl font-bold uppercase"
              style={{ fontFamily: "var(--font-surt-bold)" }}
            >
              Our Tech Partners
            </h1>
          </div>
          <div className="w-full flex-center flex-col gap-5 relative overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {brands.map((brand) => (
                <BrandLogo key={brand.name} {...brand} />
              ))}
            </Marquee>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BrandMarquee;
