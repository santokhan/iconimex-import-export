import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper-slider.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import HeroSection from "./HeroSection";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";
import HeroSection3 from "./HeroSection3";
import HeroSection4 from "./HeroSection4";

export default function SwiperSlider({ startScroll }) {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeroSection startScroll={startScroll}></HeroSection>
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection1 startScroll={startScroll}></HeroSection1>
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection2 startScroll={startScroll}></HeroSection2>
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection3 startScroll={startScroll}></HeroSection3>
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection4 startScroll={startScroll}></HeroSection4>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
