import Header from "../components/header/Header";
import Agricultural from "../components/products/agricultural/Agricultural";
import Vehicles from "../components/products/vehicles/Vehicles";
import Industrial from "../components/products/industrial/Industiral";
import Footer from "../components/footer/Footer";
import WhatWeImport from "../components/whatweimport/WhatWeImport";
import WhyIcon from "../components/why-icon/WhyIcon";
import ContactFrom from "../components/contact/ContactFrom";
import Gallary from "../components/gallary/Gallary";
import React, { useRef } from "react";
import SwiperSlider from "../components/hero-section/SwiperSlider";
import AfterSalesServices from "../components/after-sales-services/AfterSalesServices";
import Construction from "../components/products/construction/Construction";
import About from "../components/about-company/AboutCompany";

export default function Home() {
  const myRef = useRef(null);
  function startScroll() {
    myRef.current.scrollIntoView();
  }

  return (
    <div className="text-light-sky relative bg-gray-50">
      <Header></Header>
      <SwiperSlider startScroll={startScroll}></SwiperSlider>
      <About></About>
      <WhatWeImport></WhatWeImport>
      <Construction></Construction>
      <Vehicles></Vehicles>
      <WhyIcon></WhyIcon>
      <Industrial></Industrial>
      <Agricultural myRef={myRef}></Agricultural>
      <AfterSalesServices></AfterSalesServices>
      <Gallary></Gallary>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </div>
  );
}
