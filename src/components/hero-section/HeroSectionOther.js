import Title from "./Title";

export default function HeroSectionOther({ children }) {
  return (
    <div className="bg-hero flex justify-center items-center py-16 lg:py-20">
      <div className="text-start lg:text-center max-w-7xl p-4">
        <Title>{children}</Title>
      </div>
    </div>
  );
}
