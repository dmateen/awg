import AboutUs from "@/components/aboutus";
import ContactUs from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import CustomerLogos from "@/components/customers";
import SplitSection from "@/components/splitSection";
import CeoMessage from "@/components/ceoMessage";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <SplitSection />
      <Services />
      <CeoMessage />
      <ContactUs />
      <CustomerLogos />
      <Footer />
    </>
  );
}
