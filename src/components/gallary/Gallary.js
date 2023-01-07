import React, { useState } from "react";
import PLayout from "../products/layout/PLayout";
import PHeader, { PTitle, PIcon, PDes } from "../products/layout/PHeader";
import PMain from "../products/layout/PMain";

export default function Gallary() {
  const [src, setsrc] = useState(0);
  const [limit, setlimit] = useState(6);

  return (
    <PLayout>
      <PHeader>
        <PIcon>
          <img className="h-8" src="/images/seeds.png" alt="seeds" />
        </PIcon>
        <PTitle>Visit our gallary</PTitle>
      </PHeader>
      <PMain>
        <ZoomView src={src} setsrc={setsrc}></ZoomView>
        {[...Array(11)].map((e, i) => {
          if (i < limit) {
            return (
              <button
                type="button"
                onClick={() => {
                  setsrc(i + 1);
                }}
                className="w-[372px] bg-white shadow-xl hover:scale-105 transition-all duration-200 ease-out"
                key={`/images/gallary/${i + 1}.jpeg`}
              >
                <img
                  src={`/images/gallary/${i + 1}.jpeg`}
                  alt="products"
                  className="w-[372px] h-[372px] object-cover"
                />
              </button>
            );
          } else {
            return "";
          }
        })}
      </PMain>
      {limit < 12 ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => {
              setlimit(12);
            }}
            className="text-white bg-green-700 hover:brightness-90 focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            View more
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => {
              setlimit(6);
            }}
            className="text-white bg-green-700 hover:brightness-90 focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            View less
          </button>
        </div>
      )}
    </PLayout>
  );
}

export function ZoomView({ src, setsrc, children }) {
  if (src) {
    return (
      <div className="w-full h-screen flex justify-center items-center fixed left-0 top-0 z-[1110] bg-gray-900/95">
        <button
          type="button"
          className="absolute right-8 top-4"
          onClick={() => {
            setsrc(0);
          }}
        >
          <i
            class="fa fa-plus rotate-45 text-white text-3xl"
            aria-hidden="true"
          ></i>
        </button>
        <div className="max-w-4xl w-full max-h-[50vh] flex justify-between items-center gap-6 text-white">
          <button
            type="button"
            onClick={() => {
              if (src > 1) {
                setsrc(src - 1);
              }
            }}
          >
            <i
              class="fa fa-angle-left text-2xl lg:text-4xl"
              aria-hidden="true"
            ></i>
          </button>
          {src ? (
            <img
              src={`/images/gallary/${src}.jpeg`}
              alt="products"
              className="w-3/4 lg:w-full h-60 sm:h-auto max-h-[50vh] object-contain"
            />
          ) : (
            ""
          )}
          <button
            type="button"
            onClick={() => {
              if (src < 12) {
                setsrc(src + 1);
              }
            }}
          >
            <i
              class="fa fa-angle-right text-2xl lg:text-4xl"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    );
  }
}
