import React from "react";
import WebsiteHeader from "../../Components/WebsiteHeader";
import HomePage from "./HomePage";
import Explore from "./Explore";
import WhyUs from "./WhyUs";
import Featured from "./Featured";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

export default function Website() {
  return (
    <div>
      <WebsiteHeader />
      <HomePage />
      <div className="pt-4">
        <Explore />
      </div>
      <div className="pt-5">
        <WhyUs />
      </div>
      <Featured />
      <Testimonial />
      <Contact />
    </div>
  );
}
