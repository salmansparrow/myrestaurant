import Catering from "@/component/Catering/Catering";
import Delivery from "@/component/Delivery/Delivery";
import Layout from "@/component/Layout/Layout";
import TestimonialSlider from "@/component/Testimonial/Testimonial";

import HeroSection from "@/component/Users/Hero/Hero";
import SpecialsSection from "@/component/Users/Slider/Slider";

function HomePage() {
  return (
    <>
      <Layout>
        <HeroSection />
        <SpecialsSection />
        <Delivery />
        <Catering />
        <TestimonialSlider />
      </Layout>
    </>
  );
}

export default HomePage;
