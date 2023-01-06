import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import WhatWeImport from "../components/whatweimport/WhatWeImport";
import WhyIcon from "../components/why-icon/WhyIcon";
import HeroSectionOther from "../components/hero-section/HeroSectionOther";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <HeroSectionOther>About</HeroSectionOther>
      <WhatWeImport></WhatWeImport>
      <WhyIcon></WhyIcon>
      <Footer></Footer>
    </div>
  );
}
