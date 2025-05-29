"use client";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];
  const [videoStates, setVideoStates] = useState([
    { isPlaying: true, isMuted: true },
    { isPlaying: true, isMuted: true },
    { isPlaying: true, isMuted: true },
  ]);

  const togglePlay = (index: number) => {
    if (videoRefs[index].current) {
      if (videoStates[index].isPlaying) {
        videoRefs[index].current.pause();
      } else {
        videoRefs[index].current.play();
      }
      setVideoStates((prev) => {
        const newStates = [...prev];
        newStates[index] = {
          ...newStates[index],
          isPlaying: !newStates[index].isPlaying,
        };
        return newStates;
      });
    }
  };

  const toggleMute = (index: number) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.muted = !videoRefs[index].current.muted;
      setVideoStates((prev) => {
        const newStates = [...prev];
        newStates[index] = {
          ...newStates[index],
          isMuted: !newStates[index].isMuted,
        };
        return newStates;
      });
    }
  };

  return (
    <section ref={sectionRef} className="w-full mt-10 md:mt-36 relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#033187]/30 to-transparent rounded-full blur-2xl z-[-1]"></div>
      <div className="absolute top-[20%] right-0 w-64 h-64 bg-gradient-to-br from-[#033187]/30 to-transparent rounded-full blur-2xl z-[-1]"></div> */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <main className="max-w-[1440px] m-auto relative">
        <div className="px-5 py-20 w-full flex-center flex-col gap-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="w-full flex-center flex-col gap-6"
          >
            <h1
              className="text-white text-5xl md:text-8xl lg:text-8xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"
              style={{ fontFamily: "var(--font-surt-bold)" }}
            >
              Testimonials
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-base md:text-xl text-center max-w-[800px] font-Outfit leading-relaxed"
            >
              We create thoughtful, effective solutions across design and
              digital. Each project reflects our focus on quality, creativity,
              and results. Take a look at what we've built.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-8 group"
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="h-[700px] w-full flex-center rounded-3xl relative group/card"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                <video
                  ref={videoRefs[index]}
                  src={
                    index === 1
                      ? "https://ik.imagekit.io/inxr5mngi/Untitled%20design.mp4?updatedAt=1747785737181"
                      : "https://ik.imagekit.io/inxr5mngi/WhatsApp%20Video%202025-05-21%20at%2005.27.46_ae326c4c.mp4?updatedAt=1747785545173"
                  }
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover rounded-3xl transform group-hover/card:scale-[1.02] transition-transform duration-500"
                />
                {/* Video Controls Overlay */}
                <div className="absolute w-full bottom-[-1%] left-0 right-0 p-6 opacity-0 group-hover/card:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => togglePlay(index)}
                        className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/30 transition-all duration-300 hover:scale-110"
                        aria-label={
                          videoStates[index].isPlaying
                            ? "Pause video"
                            : "Play video"
                        }
                      >
                        {videoStates[index].isPlaying ? (
                          <Pause className="text-white w-6 h-6" />
                        ) : (
                          <Play className="text-white w-6 h-6" />
                        )}
                      </button>
                      <button
                        onClick={() => toggleMute(index)}
                        className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/30 transition-all duration-300 hover:scale-110"
                        aria-label={
                          videoStates[index].isMuted
                            ? "Unmute video"
                            : "Mute video"
                        }
                      >
                        {videoStates[index].isMuted ? (
                          <VolumeX className="text-white w-6 h-6" />
                        ) : (
                          <Volume2 className="text-white w-6 h-6" />
                        )}
                      </button>
                    </div>
                    <div className="text-white font-medium">
                      <p className="text-lg">Client Testimonial</p>
                      <p className="text-sm text-gray-300">
                        Project {index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Testimonials;
