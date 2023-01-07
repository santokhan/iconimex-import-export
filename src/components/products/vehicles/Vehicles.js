import React, { useState } from "react";
import PLayout from "../layout/PLayout";
import PHeader, { PTitle, PIcon, PDes } from "../layout/PHeader";
import PTabs, { Tab } from "../layout/PTabs";
import PMain from "../layout/PMain";
import PCard, { CImg, CTitle, CDes } from "../layout/PCard";
import { AgriculturalContext } from "../../../context/tabs/AgriculturalContext";

export default function Vehicles() {
  const [tab, settab] = useState(1);
  function handleTab(id) {
    settab(id);
  }

  return (
    <AgriculturalContext.Provider value={{ tab, handleTab }}>
      <div id="vehicle">
        <PLayout>
          <PHeader>
            <PIcon>
              <img className="h-8" src="/images/vehicle.png" alt="seeds" />
            </PIcon>
            <PTitle>IMPORT Heavy Equipments</PTitle>
            <PDes>
              Heavy equipment or heavy machinery refers to heavy-duty vehicles
              specially designed to execute construction tasks, most frequently
              involving earthwork operations or other large construction tasks.
              Heavy equipment usually comprises five equipment systems: the
              implement, traction, structure, power train, and
              control/information.
            </PDes>
          </PHeader>
          <PTabs>
            <Tab id={1}>All Vechicles</Tab>
            <Tab id={2}>Light Duty</Tab>
            <Tab id={3}>Heavy Duty</Tab>
          </PTabs>
          <PMain>
            <PCard category={2}>
              <CImg src="images/products/vehicles/hilux.png"></CImg>
              <CTitle>Pick ups</CTitle>
              <CDes>
                The Toyota Hilux stylized as HiLux and historically as Hi-Lux,
                is a series of pickup trucks produced and marketed by the
                Japanese automobile manufacturer
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/vehicles/cruiser.png"></CImg>
              <CTitle>Station Wagon</CTitle>
              <CDes>
                Sales fell off over time, and as the Japanese brand made
                improvements to its Sequoia and Lexus LX SUVs, the legacy 4x4
                gave up its place in the lineup.
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/vehicles/4.png"></CImg>
              <CTitle>Minivan</CTitle>
              <CDes>
                Explore the newest Toyota trucks, cars, SUVs, hybrids and
                minivans. See photos, compare models, payments, and more.
              </CDes>
            </PCard>
            <PCard category={3}>
              <CImg src="images/products/vehicles/12.png"></CImg>
              <CTitle>dump truck</CTitle>
              <CDes>
                A dump truck, known also as a dumping truck, dump trailer,
                dumper trailer, dump lorry or dumper lorry or a dumper for
                short, is used for transporting
              </CDes>
            </PCard>
            <PCard category={3}>
              <CImg src="images/products/vehicles/concrete-mixer.png"></CImg>
              <CTitle>concrete mixer</CTitle>
              <CDes>
                A concrete mixer is a device that homogeneously combines cement,
                aggregate such as sand or gravel, and water to form concrete.
              </CDes>
            </PCard>
            <PCard category={3}>
              <CImg src="images/products/vehicles/howo-cargo.png"></CImg>
              <CTitle>howo cargo</CTitle>
              <CDes>
                Cargo trucks are transport vehicles for cargo that doesn't
                require much space or horsepower to haul
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/vehicles/mercedes.png"></CImg>
              <CTitle>automobiles</CTitle>
              <CDes>
                An automobile is a motor vehicle with wheels. Most definitions
                of cars say that they run primarily on roads, seat one to eight
                people, have four wheels, and mainly transport people
              </CDes>
            </PCard>
            <PCard category={3}>
              <CImg src="images/products/vehicles/cargo-truck.png"></CImg>
              <CTitle>cargo truck</CTitle>
              <CDes>
                Cargo trucks are transport vehicles for cargo that doesn't
                require much space or horsepower to haul
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/vehicles/volkswagen.png"></CImg>
              <CTitle>electric cars</CTitle>
              <CDes>
                An electric car is an automobile that is propelled by one or
                more electric motors, using only energy stored in batteries.
                Compared to internal combustion engine (ICE) vehicles, electric
                cars are quieter, have no exhaust emissions, and lower emissions
                overall.
              </CDes>
            </PCard>
          </PMain>
        </PLayout>
      </div>
    </AgriculturalContext.Provider>
  );
}
