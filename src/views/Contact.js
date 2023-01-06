import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ContactFrom from "../components/contact/ContactFrom";
import Map from "../components/Map";
import HeroSectionOther from "../components/hero-section/HeroSectionOther";

export default function Contact() {
  return (
    <div className="bg-gray-50">
      <Header></Header>
      <HeroSectionOther>Contact</HeroSectionOther>
      <ContactFrom></ContactFrom>
      <Map></Map>
      <Footer></Footer>
    </div>
  );
}
