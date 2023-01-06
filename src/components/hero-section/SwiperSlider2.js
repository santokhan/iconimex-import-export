import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper-slider.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import HSLayout, { HSContainer, HSDescription } from "./HeroSectionUI";
import Title2 from "./Title2";
import ReadMore from "./ReadMore";

export default function SwiperSlider2({ startScroll }) {
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
          <HSLayout className={"slide-1"}>
            <HSContainer>
              <Title2>
                Reaching your demand with our reliable and affordable services.
              </Title2>
              <HSDescription>
                Our export business delivers superior Ethiopian Agricultural
                products to the rest of the world. We offer an extensive range
                of top-quality oil seeds, Pulses and Green Coffee Beans of
                Ethiopian{" "}
              </HSDescription>
              <ReadMore startScroll={startScroll}></ReadMore>
            </HSContainer>
          </HSLayout>
        </SwiperSlide>
        <SwiperSlide>
          <HSLayout className={"slide-2"}>
            <HSContainer>
              <Title2>Construction & Earth Moving Machinery Import</Title2>
              <HSDescription>
                With the ever growth economy of our continent, Construction
                Equipment’s and Earth Moving Machinery plays a vital role. Icon
                import contributes for this huge development by importing high
                quality, advanced and greatly relevant construction machineries
                from different part of continents. Thus are
              </HSDescription>
              <ReadMore startScroll={startScroll}></ReadMore>
            </HSContainer>
          </HSLayout>
        </SwiperSlide>
        <SwiperSlide>
          <HSLayout className={"slide-3"}>
            <HSContainer>
              <Title2>Industrial Machineries Import</Title2>
              <HSDescription>
                We have a wide range of products for governmental &
                nongovernmental organizations that are appropriate from small to
                large-scale projects. We strive to offer clients cost-effective
                solutions that are robust, appropriate to the need, and easy to
                implement. Which use like
              </HSDescription>
              <ReadMore startScroll={startScroll}></ReadMore>
            </HSContainer>
          </HSLayout>
        </SwiperSlide>
        <SwiperSlide>
          <HSLayout className={"slide-4"}>
            <HSContainer>
              <Title2>Light & Heavy-Duty Vehicles Import</Title2>
              <HSDescription>
                Icon ImOur company import well-known brand of vehicles & trucks.
              </HSDescription>
              <ReadMore startScroll={startScroll}></ReadMore>
            </HSContainer>
          </HSLayout>
        </SwiperSlide>
        <SwiperSlide>
          <HSLayout className={"slide-5"}>
            <HSContainer>
              <Title2>Export Agricultural Products </Title2>
              <HSDescription>
                Our export business delivers superior Ethiopian Agricultural
                products to the rest of the world. We offer an extensive range
                of top-quality oil seeds, Pulses and Green Coffee Beans of
                Ethiopian{" "}
              </HSDescription>
              <ReadMore startScroll={startScroll}></ReadMore>
            </HSContainer>
          </HSLayout>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
