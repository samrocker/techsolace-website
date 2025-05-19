"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full fixed top-0 left-0 z-50">
      <main className="max-w-[1440px] mx-auto">
        <div className="px-5 py-7 flex-center">
          <div className="flex-[2] md:flex-[1] w-full flex-start">
            <Link href="/" className="text-xl font-normal">
              Samridh Satnalika
            </Link>
          </div>
          <div className="flex-[2] w-full hidden md:flex-center gap-5">
            <Link href="/" className="text-base font-normal">
              Home
            </Link>
            <Link href="/" className="text-base font-normal">
              About
            </Link>
            <Link href="/" className="text-base font-normal">
              Blogs
            </Link>
            <Link href="/" className="text-base font-normal">
              Projects
            </Link>
          </div>
          <div className="flex-[1] w-full hidden md:flex-end">
            <Button className="rounded-full">
              <Link href="/" className="text-base font-normal">
                Contact
              </Link>
            </Button>
          </div>
          <div className="flex-[1] w-full flex-end md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  <span
                    className={`h-[1px] w-10 bg-primary rounded-full absolute transition-all duration-300 ease-in-out ${
                      isOpen ? "rotate-45" : "translate-y-[-6px]"
                    }`}
                  />
                  <span
                    className={`h-[1px] w-10 bg-primary rounded-full absolute transition-all duration-300 ease-in-out ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`h-[1px] w-10 bg-primary rounded-full absolute transition-all duration-300 ease-in-out ${
                      isOpen ? "-rotate-45" : "translate-y-[6px]"
                    }`}
                  />
                </button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="h-screen w-full flex flex-col gap-10 items-start justify-center">
                  <Link href="/" className="text-3xl font-normal">
                    Home
                  </Link>
                  <Link href="/" className="text-3xl font-normal">
                    About
                  </Link>
                  <Link href="/" className="text-3xl font-normal">
                    Blogs
                  </Link>
                  <Link href="/" className="text-3xl font-normal">
                    Projects
                  </Link>
                  <Button
                    className="rounded-full text-lg"
                    variant={"default"}
                    size={"lg"}
                  >
                    Contact
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Header;