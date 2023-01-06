import { useEffect, useState, useRef } from "react";

export default function ReadMore({ startScroll }) {
  return (
    <button
      type="button"
      onClick={startScroll}
      className="flex items-center gap-4 bg-white text-raisin px-5 lg:px-8 py-3 lg:py-4 rounded-full lg:text-xl font-medium hero-button relative hover:bg-gray-100 focus:scale-95"
    >
      Read more
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.4299 5.92969L20.4999 11.9997L14.4299 18.0697"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 12H20.33"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
