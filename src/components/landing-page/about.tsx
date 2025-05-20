import Image from "next/image";
import React from "react";
import Siren from "../../../public/images/siren.png";
import PaperPlane from "../../../public/images/paper-plane.png";

const about = () => {
  return (
    <section className="w-full relative mt-36">
      <Image
        src={PaperPlane}
        alt="earth-decoration"
        className="w-16 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto absolute top-10 xs:top-6 sm:top-6 md:top-0 left-5 xs:left-12 sm:left-16 md:left-44 z-[-1]"
      />
      <Image
        src={Siren}
        alt="pen-decoration"
        className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto absolute top-10 xs:top-10 sm:top-20 md:top-32 lg:bottom-0 right-5 xs:right-12 sm:right-16 md:right-44 z-[-1]"
      />
      {/* <Image
        src={Book}
        alt="book-decoration"
        className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto absolute bottom-32 xs:bottom-10 sm:bottom-6 md:bottom-10 right-8 xs:right-12 sm:right-8 md:right-16 z-[-1]"
      /> */}
      <main className="max-w-[1440px] m-auto relative">
        <div className="px-5 py-10 w-full flex-center flex-col gap-16">
          <h1
            className="text-white text-5xl md:text-8xl lg:text-8xl font-bold uppercase"
            style={{ fontFamily: "var(--font-surt-bold)" }}
          >
            Peek Behind the Pixels
          </h1>
          <p className="text-white text-sm md:text-lg lg:text-4xl text-center max-w-[1000px] font-Outfit">
            Our Creative Process Unleashing Creativity, Shaping Your Brand! At
            our design agency, we specialize in creating unique and memorable
            visual experiences for bold brands ready to make a statement.
          </p>
        </div>
      </main>
    </section>
  );
};

export default about;
