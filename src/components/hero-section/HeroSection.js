import ReadMore from "./ReadMore";
import Title from "./Title";

export default function HeroSection({ startScroll }) {
  return (
    <div className="slide-1 flex justify-center items-center h-full w-full">
      <div className="effect w-full h-full flex justify-center items-center">
        <div className="text-start lg:text-center max-w-7xl p-4">
          <Title>
            Reaching your demand with our reliable and affordable services.
          </Title>
        </div>
      </div>
    </div>
  );
}
