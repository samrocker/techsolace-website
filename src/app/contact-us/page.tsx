import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import logo from "../../../public/images/Logo.png";
import Gradient from "../../../public/images/gradient-background-1.png";
import React from "react";

const AboutUsPage = () => {
  return (
    <section className="relative min-h-screen">
      <main className="max-w-[1200px] m-auto">
        <div className="px-4 sm:px-5 py-5 min-h-screen w-full flex-center flex-col gap-6 sm:gap-10">
          <div className="w-full flex-start">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-sora">
              We're here to help
            </h1>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10">
            <div className="w-full lg:flex-[1] flex flex-col gap-5 sm:gap-7 mt-5 sm:mt-10">
              <div className="flex flex-col gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="e.g. John Smith"
                  className="w-full bg-white/5 border-none py-4 sm:py-5"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="e.g. example@gmail.com"
                  className="w-full bg-white/5 border-none py-4 sm:py-5"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="e.g. Let us know how we can help"
                  className="min-h-[150px] sm:min-h-[200px] max-h-[200px] w-full bg-white/5 border-none py-4 sm:py-5"
                />
              </div>
              <Button className="rounded-full w-full sm:w-auto">Send Message</Button>
            </div>
            <div className="w-full lg:flex-[1] flex-col gap-5">
              <div className="h-[350px] sm:h-[450px] w-full max-w-[500px] mx-auto flex flex-col backdrop-blur-md bg-gray-100/5 rounded-3xl items-start justify-between px-5 sm:px-7 py-8 sm:py-10 border">
                <div className="w-full flex-start">
                  <Image
                    src={logo}
                    alt="TechSolace Logo"
                    width={1920}
                    height={1080}
                    className="h-8 sm:h-10 w-auto"
                  />
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-4 sm:gap-5">
                  <h1 className="text-base sm:text-lg font-sora text-gray-400">
                    "Arctic{" "}
                    <span className="text-white">
                      cut project delays by 30%
                    </span>{" "}
                    and transformed our global team communication saving us
                    hours every week"
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Image
        src={Gradient}
        alt="Background gradient"
        width={1920}
        height={1080}
        className="absolute w-full h-full top-0 left-0 z-[-1] opacity-40 object-cover"
      />
    </section>
  );
};

export default AboutUsPage;
