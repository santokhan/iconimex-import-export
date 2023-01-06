import ReadMore from "./ReadMore";
import Title from "./Title";

export default function HSLayout({ startScroll, children, className }) {
  return (
    <div
      className={
        "flex justify-center items-center h-full w-full relative " + className
      }
    >
      <div className="effect w-full h-full flex justify-end items-end">
        {children}
      </div>
    </div>
  );
}

export function HSContainer({ children }) {
  return (
    <div className="flex flex-col gap-4 items-start text-start max-w-5xl px-12 py-12 bg-[rgba(0,0,0,0.25)] backdrop-blur-sm rounded-tl-[2.5rem]">
      {children}
    </div>
  );
}
export function HSDescription({ children }) {
  return (
    <div className="text-base lg:text-xl text-gray-200 my-2">{children}</div>
  );
}
