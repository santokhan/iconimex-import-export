import Header from "../components/header/Header";
import Agricultural from "../components/products/agricultural/Agricultural";
import Vehicles from "../components/products/vehicles/Vehicles";
import Industrial from "../components/products/industrial/Industiral";
import Footer from "../components/footer/Footer";
import WhyIcon from "../components/why-icon/WhyIcon";
import ContactFrom from "../components/contact/ContactFrom";
import Gallary from "../components/gallary/Gallary";
import HeroSectionOther from "../components/hero-section/HeroSectionOther";
import WhatWeImport from "../components/whatweimport/WhatWeImport";
export default function Home() {
  return (
    <div className="text-light-sky">
      <Header></Header>
      <HeroSectionOther>Export</HeroSectionOther>
      <Agricultural></Agricultural>
      <WhatWeImport></WhatWeImport>
      <Vehicles></Vehicles>
      <WhyIcon></WhyIcon>
      <Industrial></Industrial>
      <Gallary></Gallary>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </div>
  );
}
