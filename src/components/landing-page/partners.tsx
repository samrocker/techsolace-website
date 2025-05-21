import React from "react";

const Partners = () => {
  return (
    <section className="mt-32">
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-5 w-full flex-center flex-col gap-5">
          <div className="w-full flex-center flex-col gap-5">
            <h1
              className="text-white text-5xl md:text-8xl lg:text-8xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"
              style={{ fontFamily: "var(--font-surt-bold)" }}
            >
              Comminity & tech partners
            </h1>
            <p className="text-gray-300 text-sm md:text-lg text-center max-w-[800px] font-Outfit leading-relaxed">
              We’re proud to collaborate with a vibrant community and
              forward-thinking tech partners who help us innovate, grow, and
              create lasting impact. Together, we build stronger connections and
              smarter solutions.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
        </div>
      </main>
    </section>
  );
};

export default Partners;
