import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Banner from "./components/banner/Banner";
import Products from "./components/products/Products";
import Pricing from "./components/pricing/Pricing";
import WhyWe from "./components/why_we/WhyWe";
import Contacts from "./components/contacts/contacts";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  //  animation
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in",
      once: false,
      mirror: false,
    });
  });

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <Products />
      <Pricing />
      <WhyWe />
      <Contacts />
    </div>
  );
};

export default App;
