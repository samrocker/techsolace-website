import About from "@/components/landing-page/about";                                                                                  
import BrandMarquee from "@/components/landing-page/brand-marquee";
import HeroSection from "@/components/landing-page/hero";
import NewLetter from "@/components/landing-page/news-letter";
import Partners from "@/components/landing-page/partners";
import Pricing from "@/components/landing-page/pricing";
import Products2 from "@/components/landing-page/products2";
import Testimonials from "@/components/landing-page/testimonials";
import VideoTestimonial from "@/components/landing-page/video-testimonial";
import Products1 from "@/components/landing-page/Products1";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <About />
      <BrandMarquee />
      {/* <VideoTestimonial /> */}
      <Products1 />
      <Products2 />
      <Testimonials />
      <Pricing />
      <NewLetter />
      <Partners />
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="bg-blob absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-blue-900/10 blur-[120px]"></div>
        <div className="bg-blob absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-blue-800/10 blur-[100px]"></div>
        <div className="bg-blob absolute top-[40%] right-[20%] w-[25vw] h-[25vw] rounded-full bg-indigo-900/10 blur-[80px]"></div>
      </div> */}
    </main>
  );
}