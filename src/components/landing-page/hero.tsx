import Image from "next/image";
import Link from "next/link";
import PaperTexture from "../../../public/images/paper-texture.jpg";
import Pen from "../../../public/images/Pen.png";
import Earth from "../../../public/images/Earth.png";
import Book from "../../../public/images/book.png";

export default function Home() {
  return (
    <section className="w-full relative overflow-hidden">
      <Image
        src={PaperTexture}
        alt="hero-bg"
        className="w-full h-full opacity-30 absolute top-0 left-0 z-[-1] object-cover"
      />
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 sm:opacity-10 pointer-events-none">
        {Array.from({ length: 13 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full w-[1px] bg-gray-500"
            style={{ left: `${(i / 12) * 100}%` }}
          />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full h-[1px] bg-gray-500"
            style={{ top: `${(i / 12) * 100}%` }}
          />
        ))}
      </div>
      <main className="max-w-[1440px] mx-auto relative px-1 xs:px-2 sm:px-8 lg:px-12">
        <Image
          src={Pen}
          alt="pen-decoration"
          className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto absolute top-32 xs:top-10 sm:top-20 md:top-32 lg:top-52 left-8 xs:left-12 sm:left-16 md:left-24 z-[-1]"
        />
        <Image
          src={Earth}
          alt="earth-decoration"
          className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto absolute top-40 xs:top-6 sm:top-6 md:top-10 right-8 xs:right-12 sm:right-16 md:right-36 z-[-1]"
        />
        <Image
          src={Book}
          alt="book-decoration"
          className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-52 h-auto absolute bottom-32 xs:bottom-10 sm:bottom-6 md:bottom-10 right-8 xs:right-12 sm:right-8 md:right-16 z-[-1]"
        />
        <div className="min-h-screen w-full flex-center flex-col gap-2 sm:gap-3 text-center py-8 sm:py-12">
          <h1
            className="leading-[0.8] tracking-tighter space-y-[0.5rem] xs:space-y-[1rem] sm:space-y-[1.5rem] md:space-y-[2rem]"
            style={{ fontFamily: "var(--font-surt-bold)" }}
          >
            <div className="text-[4rem] xs:text-[4.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[9rem] xl:text-[11rem]">
              CREATE NEW
            </div>

            <div className="text-[4rem] xs:text-[4.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[9rem] xl:text-[11rem] relative">
              <span className="absolute text-[#c4b27c] opacity-30 top-0.5 xs:top-1 sm:top-2">
                EXPERIENCE
              </span>
              <span className="text-[#F8D568]">EXPERIENCE</span>{" "}
              <span className="text-white">WITH</span>
            </div>
            <div
              className="text-[4rem] xs:text-[4.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[9rem] xl:text-[11rem] text-transparent bg-clip-text"
              style={{ WebkitTextStroke: "1px white" }}
            >
              WAYS OF
            </div>

            <div className="text-[4rem] xs:text-[4.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[9rem] xl:text-[11rem] flex flex-wrap justify-center items-center gap-1 xs:gap-2 sm:gap-4">
              <span className="text-white">PERFECT</span>
              <span className="relative p-1 xs:p-2 sm:p-3">
                <span className="text-[#6B7FFF] z-10 relative">LEARNING</span>
                <span className="absolute inset-0 border-[2px] border-dashed border-[#6B7FFF] z-0"></span>
              </span>
            </div>
          </h1>
        </div>
      </main>
    </section>
  );
}
