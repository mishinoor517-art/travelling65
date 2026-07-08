import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Cities from "@/components/Cities";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Experiences from "@/components/Experiences";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Cities />
        <Packages />
        <WhyChooseUs />
        <Experiences />
        <Testimonials />
        <Stats />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
