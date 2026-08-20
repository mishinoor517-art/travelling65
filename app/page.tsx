import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
<<<<<<< HEAD
import AboutUs from "@/components/AboutUs";
=======
import Cities from "@/components/Cities";
import Packages from "@/components/Packages";
>>>>>>> fe46921e5febfe746a465ceebfe5c2b8874ccec9
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
<<<<<<< HEAD
        <AboutUs />
=======
        <Cities />
        <Packages />
>>>>>>> fe46921e5febfe746a465ceebfe5c2b8874ccec9
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
