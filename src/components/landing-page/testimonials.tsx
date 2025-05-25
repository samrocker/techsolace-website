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
      setVideoStates(prev => {
        const newStates = [...prev];
        newStates[index] = {
          ...newStates[index],
          isPlaying: !newStates[index].isPlaying
        };
        return newStates;
      });
    }
  };

  const toggleMute = (index: number) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.muted = !videoRefs[index].current.muted;
      setVideoStates(prev => {
        const newStates = [...prev];
        newStates[index] = {
          ...newStates[index],
          isMuted: !newStates[index].isMuted
        };
        return newStates;
      });
    }
  };

  return (
    <section ref={sectionRef} className="mt-28">
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-5 w-full flex-center flex-col gap-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="w-full flex-center flex-col gap-5"
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
              className="text-gray-300 text-sm md:text-lg text-center max-w-[800px] font-Outfit leading-relaxed"
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
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-5 group"
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="h-[700px] w-full flex-center rounded-3xl relative group"
              >
                <video
                  ref={videoRefs[index]}
                  src={index === 1 
                    ? "https://ik.imagekit.io/inxr5mngi/Untitled%20design.mp4?updatedAt=1747785737181"
                    : "https://ik.imagekit.io/inxr5mngi/WhatsApp%20Video%202025-05-21%20at%2005.27.46_ae326c4c.mp4?updatedAt=1747785545173"
                  }
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => togglePlay(index)}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label={videoStates[index].isPlaying ? "Pause video" : "Play video"}
                    >
                      {videoStates[index].isPlaying ? (
                        <Pause className="text-white w-5 h-5" />
                      ) : (
                        <Play className="text-white w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => toggleMute(index)}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label={videoStates[index].isMuted ? "Unmute video" : "Mute video"}
                    >
                      {videoStates[index].isMuted ? (
                        <VolumeX className="text-white w-5 h-5" />
                      ) : (
                        <Volume2 className="text-white w-5 h-5" />
                      )}
                    </button>
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
