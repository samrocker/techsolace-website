"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../public/icons/favicon.ico";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 font-Outfit ${
        isScrolled ? "bg-[#0A0A0A]/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <main className="max-w-[1000px] m-auto">
        {/* Desktop navigation */}
        <div className="px-5 py-5 w-full hidden md:flex-between gap-5">
          <Link href={"/"} className="text-md font-normal text-white/75">
            Feature
          </Link>
          <Link href={"/"} className="text-md font-normal text-white/75">
            Our Services
          </Link>
          <div className="flex-center gap-1">
            <Image src={logo} alt="logo" width={40} height={40} />
          </div>
          <Link href={"/"} className="text-md font-normal text-white/75">
            About Us
          </Link>
          <Link href={"/"} className="text-md font-normal text-white/75">
            Contact Us
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className="px-5 py-5 w-full flex justify-between items-center md:hidden">
          <div className="flex-center gap-1">
            <Image src={logo} alt="logo" width={40} height={40} />
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <span
                  className={`h-[1px] w-6 bg-white rounded-full absolute transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45" : "translate-y-[-5px]"
                  }`}
                />
                <span
                  className={`h-[1px] w-6 bg-white rounded-full absolute transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-[1px] w-6 bg-white rounded-full absolute transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45" : "translate-y-[5px]"
                  }`}
                />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#121212] text-white">
              <div className="flex flex-col gap-6 mt-10">
                <SheetClose asChild>
                  <Link
                    href={"/"}
                    className="text-lg font-normal text-white/75"
                  >
                    Feature
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={"/"}
                    className="text-lg font-normal text-white/75"
                  >
                    Our Services
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={"/"}
                    className="text-lg font-normal text-white/75"
                  >
                    About Us
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={"/"}
                    className="text-lg font-normal text-white/75"
                  >
                    Contact Us
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </main>
    </section>
  );
};

export default Header;