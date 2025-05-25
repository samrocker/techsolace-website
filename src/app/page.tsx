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
    <main className="relative">
      <HeroSection />
      {/* <Products /> */}
      <About />
      {/* <VideoTestimonial /> */}
      <Works />
      <Testimonials />
      <Pricing />
      <NewLetter />
      <Partners />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="bg-blob absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-blue-900/10 blur-[120px]"></div>
        <div className="bg-blob absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-blue-800/10 blur-[100px]"></div>
        <div className="bg-blob absolute top-[40%] right-[20%] w-[25vw] h-[25vw] rounded-full bg-indigo-900/10 blur-[80px]"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-[0.03]"></div>
      </div>
    </main>
  );
}