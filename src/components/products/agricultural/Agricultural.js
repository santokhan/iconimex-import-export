import React, { useState } from "react";
import PLayout from "../layout/PLayout";
import PHeader, { PTitle, PIcon, PDes } from "../layout/PHeader";
import PTabs, { Tab } from "../layout/PTabs";
import PMain from "../layout/PMain";
import PCard, { CImg, CTitle, CDes } from "../layout/PCard";
import { AgriculturalContext } from "../../../context/tabs/AgriculturalContext";

export default function Agricultural({ myRef }) {
  const [tab, settab] = useState(1);
  function handleTab(id) {
    settab(id);
  }

  return (
    <AgriculturalContext.Provider value={{ tab, handleTab }}>
      <div id="agricultural">
        <PLayout myRef={myRef}>
          <PHeader>
            <PIcon>
              <img className="h-8" src="/images/seeds.png" alt="seeds" />
            </PIcon>
            <PTitle>EXPORT AGRICULTURAL PRODUCTS </PTitle>
            <PDes>
              Our export business delivers superior Ethiopian Agricultural
              products to the rest of the world. We offer an extensive range of
              top-quality oil seeds, Pulses and Green Coffee Beans of Ethiopian
              Origin both washed & natural green from the birth place of Arabica
              Coffee to global coffee buyers & roasters. Our main aim is to
              provide the rich Ethiopian Coffee to the world.
            </PDes>
          </PHeader>
          <PTabs>
            <Tab id={1}>All Products</Tab>
            <Tab id={2}>Pulse</Tab>
            <Tab id={3}>Coffee</Tab>
            <Tab id={4}>Oil Seeds</Tab>
          </PTabs>
          <PMain>
            <PCard category={4}>
              <CImg src="images/products/agricultural/p-2.png"></CImg>
              <CTitle>Sesame Seeds</CTitle>
              <CDes>
                Sesame seeds are full of protein, B vitamins, minerals, fiber,
                antioxidants and other nutrients that make the tasty oily pulses
                a flavor welcome to any meal.
              </CDes>
            </PCard>
            <PCard category={4}>
              <CImg src="images/products/agricultural/p-6.png"></CImg>
              <CTitle>Niger Seeds</CTitle>
              <CDes>
                Guizotia abyssinica is an erect, stout, branched annual herb,
                grown for its edible oil and seed.
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/agricultural/p-5.png"></CImg>
              <CTitle>Chick Peas</CTitle>
              <CDes>
                The chickpea or chick pea (Cicer arietinum) is an annual legume
                of the family Fabaceae, subfamily Faboideae.
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/agricultural/p-8.png"></CImg>
              <CTitle>Green Mung Beans</CTitle>
              <CDes>
                Whole mung beans have a slightly sweet, nutty flavor and can be
                cooked on the stovetop like other dried beans.
              </CDes>
            </PCard>
            <PCard category={4}>
              <CImg src="images/products/agricultural/p-1.png"></CImg>
              <CTitle>Soya Beans</CTitle>
              <CDes>
                A recent addition to the Ethiopian pulse production, Soybean is
                sweet flavored protein field pulse is used from animal feed to
                vegetable oil production, from soy milk to soy sauce.
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/agricultural/p-4.png"></CImg>
              <CTitle>Kidney Beans</CTitle>
              <CDes>
                The kidney bean is a variety of the common bean (Phaseolus
                vulgaris).
              </CDes>
            </PCard>
            <PCard category={3}>
              <CImg src="images/products/agricultural/p-7.png"></CImg>
              <CTitle>Yirgacheffe Coffee Beans</CTitle>
              <CDes>
                Ethiopian Yirgacheffe is the coffee that's delicate, floral, and
                tea-like, with shimmery citrus notes and a clean, light body.
              </CDes>
            </PCard>
            <PCard category={3}>
              <CImg src="images/products/agricultural/p-10.png"></CImg>
              <CTitle>Sidama Coffee Beans</CTitle>
              <CDes>
                Sidama coffee: it's a phrase associated with spices and citrus
                notes, crisp acidity, and a rich body.
              </CDes>
            </PCard>
            <PCard category={3}>
              <CImg src="images/products/agricultural/p-9.png"></CImg>
              <CTitle>Harrar Coffee Beans</CTitle>
              <CDes>
                Harrar coffee is a grade of 100% Arabica coffee. The coffee
                beans are grown at high altitudes in the Harrar region of
                Ethiopia.
              </CDes>
            </PCard>
            <PCard category={3}>
              <CImg src="images/products/agricultural/p-3.png"></CImg>
              <CTitle>Limu Coffee Beans</CTitle>
              <CDes>
                The Ethiopian Limu Coffee is a unique coffee from the Tega &
                Tula Coffee Farm located in the Oromia region, in Keffa of
                Ethiopia.
              </CDes>
            </PCard>
          </PMain>
        </PLayout>
      </div>
    </AgriculturalContext.Provider>
  );
}
