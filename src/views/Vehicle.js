import Header from "../components/header/Header";
import Vehicles from "../components/products/vehicles/Vehicles";
import Footer from "../components/footer/Footer";
import WhatWeImport from "../components/whatweimport/WhatWeImport";
import WhyIcon from "../components/why-icon/WhyIcon";
import ContactFrom from "../components/contact/ContactFrom";
import Gallary from "../components/gallary/Gallary";
import HeroSectionOther from "../components/hero-section/HeroSectionOther";
export default function Home() {
  return (
    <div className="text-light-sky">
      <Header></Header>
      <HeroSectionOther>Vehicles</HeroSectionOther>
      <Vehicles></Vehicles>
      <WhyIcon></WhyIcon>
      <WhatWeImport></WhatWeImport>
      <Gallary></Gallary>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </div>
  );
}
