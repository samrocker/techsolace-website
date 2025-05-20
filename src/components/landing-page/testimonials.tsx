import React from "react";

const Testimonials = () => {
  return (
    <section className="mt-28">
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-5 w-full flex-center flex-col gap-32">
          <div className="w-full flex-center flex-col gap-5">
            <h1
              className="text-white text-5xl md:text-8xl lg:text-8xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"
              style={{ fontFamily: "var(--font-surt-bold)" }}
            >
              Testimonials
            </h1>
            <p className="text-gray-300 text-sm md:text-lg text-center max-w-[800px] font-Outfit leading-relaxed">
              We create thoughtful, effective solutions across design and
              digital. Each project reflects our focus on quality, creativity,
              and results. Take a look at what we've built.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-5">
            <div className="h-[700px] w-full flex-center bg-blue-600 rounded-3xl">
                <h1 className="text-3xl font-normal font-Outfit">Client Video</h1>
            </div>
            <div className="h-[700px] w-full flex-center bg-blue-600 rounded-3xl">
                <h1 className="text-3xl font-normal font-Outfit">Client Video</h1>
            </div>
            <div className="h-[700px] w-full flex-center bg-blue-600 rounded-3xl">
                <h1 className="text-3xl font-normal font-Outfit">Client Video</h1>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Testimonials;
