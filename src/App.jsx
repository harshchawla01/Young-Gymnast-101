import React from "react";
import { Toaster } from 'react-hot-toast';
import Layout from "./components/layout/Layout";
import HeroSection from "./components/sections/HeroSection";
import AboutUsSection from "./components/sections/AboutUsSection";
import ServicesSection from "./components/sections/ServicesSection";
import WhyGymnasticsSection from "./components/sections/WhyGymnasticsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";

const App = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <WhyGymnasticsSection />
        <TestimonialsSection />
        <ContactSection />
      </Layout>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#00AEEF',
            color: '#fff',
          },
        }}
      />
    </>
  );
};

export default App;
