import SLayout, {
  SDes,
  SHeader,
  SMain,
  STitle,
} from "../section-layout/SectionLayout";

export default function WhyIcon() {
  return (
    <div className="bg-white">
      <SLayout>
        <SHeader>
          <STitle>Why Choose ICON?</STitle>
          <SDes>
            The right product at a right time! ICON is very recognized in its
            vast experience of importing used and brand new automobiles for
            Ethiopian market. Our highly featured imports include vehicles,
            trucks and construction machineries. We also engage in the world
            export market vibrantly, through supplying export standard
            agricultural products.
          </SDes>
        </SHeader>
        <SMain>
          <WCard>
            <img
              src="images/icon-1.png"
              alt="icon"
              className="w-16 h-16 object-contain my-4"
            />
            <div className="text-lg font-medium mb-2">Quality Assure</div>
            <SDes>
              We believe in quality. Because quality is the invest in future.
            </SDes>
          </WCard>
          <WCard>
            <img
              src="images/icon-2.png"
              alt="icon"
              className="w-16 h-16 object-contain my-4"
            />
            <div className="text-lg font-medium mb-2">Reasonable Price</div>
            <SDes>
              We are providing affordable service for Ethiopian clients.
            </SDes>
          </WCard>
          <WCard>
            <img
              src="images/icon-3.png"
              alt="icon"
              className="w-16 h-16 object-contain my-4"
            />
            <div className="text-lg font-medium mb-2">Precise Delivery</div>
            <SDes>
              The right product at a right time! ICON is very recognized in its
              vast experience of importing
            </SDes>
          </WCard>
        </SMain>
      </SLayout>
    </div>
  );
}

export function WCard({ children }) {
  return (
    <div className="w-80 flex flex-col items-center text-center bg-white shadow-xl text-gray-900 rounded-2xl px-5 pt-10 pb-5 why-icon-card">
      {children}
    </div>
  );
}
