import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
    },
  },
];
const PoweredBy = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-4 lg:py-6">
        <Slide
          slidesToScroll={2}
          slidesToShow={2}
          indicators={false}
          responsive={responsiveSettings}
        >
          <div className="flex justify-center">
            <img className="h-8" src="images/poweredby/1.png" alt="brand" />
          </div>
          <div className="flex justify-center">
            <img className="h-8" src="images/poweredby/2.png" alt="brand" />
          </div>
          <div className="flex justify-center">
            <img className="h-8" src="images/poweredby/3.png" alt="brand" />
          </div>
          <div className="flex justify-center">
            <img className="h-8" src="images/poweredby/4.png" alt="brand" />
          </div>
          <div className="flex justify-center">
            <img className="h-8" src="images/poweredby/5.png" alt="brand" />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default PoweredBy;
