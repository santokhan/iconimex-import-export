import React, { useState } from "react";
import PLayout from "../layout/PLayout";
import PHeader, { PTitle, PIcon, PDes } from "../layout/PHeader";
import PTabs, { Tab } from "../layout/PTabs";
import PMain from "../layout/PMain";
import PCard, { CImg, CTitle, CDes } from "../layout/PCard";
import { AgriculturalContext } from "../../../context/tabs/AgriculturalContext";

export default function Industiral() {
  const [tab, settab] = useState(1);
  function handleTab(id) {
    settab(id);
  }

  return (
    <AgriculturalContext.Provider value={{ tab, handleTab }}>
      <div id="industrial">
        <PLayout>
          <PHeader>
            <PIcon>
              <img className="h-8" src="/images/engine.png" alt="seeds" />
            </PIcon>
            <PTitle>IMPORT Industiral Machineries</PTitle>
            <PDes>
              Our import and export business delivers superior Ethiopian
              Industrial Machineries to the rest of the world. We offer an
              extensive range of engines, sewing machines, and generator etc.
              All of these are major machines in industries. Our main aim is to
              ensure the quality of machines.
            </PDes>
          </PHeader>
          <PTabs>
            <Tab id={1}>All Products</Tab>
            <Tab id={2}>Machines</Tab>
            <Tab id={3}>Generators</Tab>
          </PTabs>
          <PMain>
            <PCard category={3}>
              <CImg src="images/products/industrial/generator.png"></CImg>
              <CTitle>Generator</CTitle>
              <CDes>
                In electricity generation, a generator is a device that converts
                motive power or fuel-based power into electric power for use in
                an external circuit.
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/industrial/2.png"></CImg>
              <CTitle>Engine</CTitle>
              <CDes>
                An engine or motor is a machine designed to convert one or more
                forms of energy into mechanical energy.
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/industrial/6.png"></CImg>
              <CTitle>Plastic Pipe Machine Machine</CTitle>
              <CDes>
                To start PVC pipe manufacturing business, register first with
                the ROC. Obtain Trade Licence from Municipality.
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/industrial/geomembrane-making-machine.png"></CImg>
              <CTitle>concrete pipe machine</CTitle>
              <CDes>
                To start PVC pipe manufacturing business, register first with
                the ROC. Obtain Trade Licence from Municipality.
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/industrial/block-machine.png"></CImg>
              <CTitle>block machine</CTitle>
              <CDes>
                To start PVC pipe manufacturing business, register first with
                the ROC. Obtain Trade Licence from Municipality.
              </CDes>
            </PCard>
          </PMain>
        </PLayout>
      </div>
    </AgriculturalContext.Provider>
  );
}
