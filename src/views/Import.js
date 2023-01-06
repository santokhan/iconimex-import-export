import Header from "../components/header/Header";
import Vehicles from "../components/products/vehicles/Vehicles";
import Industrial from "../components/products/industrial/Industiral";
import Footer from "../components/footer/Footer";
import WhatWeImport from "../components/whatweimport/WhatWeImport";
import WhyIcon from "../components/why-icon/WhyIcon";
import ContactFrom from "../components/contact/ContactFrom";
import Gallary from "../components/gallary/Gallary";
import HeroSectionOther from "../components/hero-section/HeroSectionOther";
export default function Import() {
  return (
    <div className="text-light-sky">
      <Header></Header>
      <HeroSectionOther>Import</HeroSectionOther>
      <WhatWeImport></WhatWeImport>
      <Vehicles></Vehicles>
      <Industrial></Industrial>
      <WhyIcon></WhyIcon>
      <Gallary></Gallary>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </div>
  );
}
