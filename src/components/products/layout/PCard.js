import React, { useContext } from "react";
import { AgriculturalContext } from "../../../context/tabs/AgriculturalContext";

export default function PCard({ children, category }) {
  const { tab } = useContext(AgriculturalContext);

  if (tab === 1 || tab === category) {
    return (
      <div className="w-[372px] bg-white shadow-xl hover:scale-105 transition-all duration-200 ease-out rounded-xl overflow-hidden">
        {children}
      </div>
    );
  } else {
    return "";
  }
}
export function CImg({ src }) {
  return (
    <img
      src={src}
      alt="products"
      className="w-[372px] h-[372px] object-cover"
    />
  );
}
export function CTitle({ children }) {
  return (
    <div className="px-5 pt-4 text-lg font-bold capitalize">{children}</div>
  );
}
export function CDes({ children }) {
  return <div className="px-5 pb-4 text-textgray">{children}</div>;
}
