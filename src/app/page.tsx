import About from "@/components/landing-page/about";                                                                                  
import HeroSection from "@/components/landing-page/hero";
import NewLetter from "@/components/landing-page/news-letter";
import Partners from "@/components/landing-page/partners";
import Pricing from "@/components/landing-page/pricing";
import Testimonials from "@/components/landing-page/testimonials";
// import Products from "@/components/landing-page/products";
import VideoTestimonial from "@/components/landing-page/video-testimonial";
import Works from "@/components/landing-page/works";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <Products /> */}
      <About />
      <VideoTestimonial />
      <Works />
      <Testimonials />
      <Pricing />
      <NewLetter />
      <Partners />
    </main>
  );
}