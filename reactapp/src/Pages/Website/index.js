import React from "react";
import WebsiteHeader from "../../Components/WebsiteHeader";
import Explore from "./Explore";
import WhyUs from "./WhyUs";
import Featured from "./Featured";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Home from "./Home";
import Footer from "./Footer";

export default function Website() {
  return (
    <div>
      <WebsiteHeader />
      <div id="home">
        <Home />
      </div>
      <div className="pt-5" id="explore">
        <Explore />
      </div>
      <div className="pt-5" id="whyus">
        <WhyUs />
      </div>
      <div className="pt-5" id="properties">
        <Featured />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
