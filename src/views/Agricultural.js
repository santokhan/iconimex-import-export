import Header from "../components/header/Header";
import HeroSectionOther from "../components/hero-section/HeroSectionOther";
import Agricultural from "../components/products/agricultural/Agricultural";
import Footer from "../components/footer/Footer";
import WhatWeImport from "../components/whatweimport/WhatWeImport";
import WhyIcon from "../components/why-icon/WhyIcon";
import ContactFrom from "../components/contact/ContactFrom";
import Gallary from "../components/gallary/Gallary";

export default function Home() {
  return (
    <div className="text-light-sky">
      <Header></Header>
      <HeroSectionOther>Agricultural</HeroSectionOther>
      <Agricultural></Agricultural>
      <WhatWeImport></WhatWeImport>
      <WhyIcon></WhyIcon>
      <Gallary></Gallary>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </div>
  );
}
