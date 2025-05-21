"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Prateek Jain",
    Position: "Founder",
    body: "Professional and highly skilled team.",
    img: "https://www.techsolace.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffrkyx5s3%2Fproduction%2F31172fb166b79f7c2afd887436744c1c764576c9-936x939.png%3Ffit%3Dmax%26auto%3Dformat&w=64&q=75",
  },
  {
    name: "Vismay Pentawane",
    Position: "Founder",
    body: "User-friendly design and innovative features.",
    img: "https://www.techsolace.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffrkyx5s3%2Fproduction%2F37f091f295055134a4a815e76c9cf4bb9a78a6bf-346x357.png%3Ffit%3Dmax%26auto%3Dformat&w=64&q=75",
  },
  {
    name: "Abhishek",
    Position: "Founder",
    body: "Amazing website transformation. Exceeded our website development expectations!",
    img: "https://www.techsolace.in/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffrkyx5s3%2Fproduction%2F75714fa2b916f0c954ffcaad53c418f52ea3e794-865x859.png%3Ffit%3Dmax%26auto%3Dformat&w=64&q=75",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  Position,
  body,
}: {
  img: string;
  name: string;
  Position: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-full sm:w-full cursor-pointer overflow-hidden rounded-xl border p-6",
        // light styles
        "border-gray-950/[.1]",
        // dark styles
        "dark:border-gray-50/25",
        // hover effects
        "transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
        "hover:border-gray-950/20 dark:hover:border-gray-50/40"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <div className="relative">
          <Image
            className="rounded-full ring-2 ring-gray-200 dark:ring-gray-800"
            width="48"
            height="48"
            alt={`${name}'s profile picture`}
            src={img}
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{Position}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        "{body}"
      </blockquote>
    </figure>
  );
};

const VideoTestimonial = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-16 mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Video Container - Takes 65% width on desktop */}
          <div className="w-full lg:w-[65%] relative rounded-xl overflow-hidden shadow-2xl group">
            <video
              ref={videoRef}
              src="https://ik.imagekit.io/inxr5mngi/brandVideo.mp4?updatedAt=1747785846921"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="text-white w-5 h-5" />
                  ) : (
                    <Play className="text-white w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="text-white w-5 h-5" />
                  ) : (
                    <Volume2 className="text-white w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Container - Takes 35% width on desktop */}
          <div className="h-[500px] w-full lg:w-[30%] hidden md:flex-center relative overflow-y-hidden">
            <Marquee pauseOnHover vertical className="[--duration:7s] w-full">
              {firstRow.map((review) => (
                <ReviewCard key={review.Position} {...review} />
              ))}
              {secondRow.map((review) => (
                <ReviewCard key={review.Position} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
          </div>
          <div className="w-full lg:w-[30%] flex-center flex-col gap-5 md:hidden relative overflow-y-hidden mt-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-Outfit font-medium">Testimonials</h1>
            <Marquee pauseOnHover className="[--duration:25s] w-full">
              {firstRow.map((review) => (
                <ReviewCard key={review.Position} {...review} />
              ))}
              {secondRow.map((review) => (
                <ReviewCard key={review.Position} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;
