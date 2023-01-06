import React, { useState } from "react";
import PLayout from "../layout/PLayout";
import PHeader, { PTitle, PIcon, PDes } from "../layout/PHeader";
import PTabs, { Tab } from "../layout/PTabs";
import PMain from "../layout/PMain";
import PCard, { CImg, CTitle, CDes } from "../layout/PCard";
import { AgriculturalContext } from "../../../context/tabs/AgriculturalContext";

export default function Construction() {
  const [tab, settab] = useState(1);
  function handleTab(id) {
    settab(id);
  }

  return (
    <AgriculturalContext.Provider value={{ tab, handleTab }}>
      <div id="construction">
        <PLayout>
          <PHeader>
            <PIcon>
              <img className="h-8" src="/images/vehicle.png" alt="seeds" />
            </PIcon>
            <PTitle>Construction & Earth Moving Machinery Import</PTitle>
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
            <Tab id={1}>All machines</Tab>
            <Tab id={2}>Construction</Tab>
            <Tab id={3}>Earth Moving</Tab>
            <Tab id={4}>Drills</Tab>
          </PTabs>
          <PMain>
            <PCard category={3}>
              <CImg src="images/products/construction/2.png"></CImg>
              <CTitle>Excavators</CTitle>
              <CDes>
                Excavators are heavy construction equipment consisting of a
                boom, dipper (or stick).
              </CDes>
            </PCard>
            <PCard category={3}>
              <CImg src="images/products/construction/5.png"></CImg>
              <CTitle>Bulldozers</CTitle>
              <CDes>
                A bulldozer or dozer is a large, motorized machine equipped with
                a metal blade to the front for pushing material.
              </CDes>
            </PCard>
            <PCard category={3}>
              <CImg src="images/products/construction/7.png"></CImg>
              <CTitle>Loaders</CTitle>
              <CDes>
                A loader is a heavy equipment machine used in construction to
                move or load materials such as soil, rock, sand, demolition
                debris.
              </CDes>
            </PCard>
            <PCard category={5}>
              <CImg src="images/products/construction/9.png"></CImg>
              <CTitle>Forklifts</CTitle>
              <CDes>
                A forklift is a powered industrial truck used to lift and move
                materials over short distances.
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/construction/asphalt-paver.png"></CImg>
              <CTitle>Asphalt Pavers</CTitle>
              <CDes>
                Caterpillar offers a broad range of asphalt paving machines from
                wheel and track asphalt pavers to tamper bar and vibratory
                screeds.
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/construction/batching.png"></CImg>
              <CTitle>Concrete Batching Plants</CTitle>
              <CDes>
                The process of measuring ingredients or materials to prepare
                concrete mix is known as batching of concrete. Batching can be
                done by two methods
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/construction/peb.png"></CImg>
              <CTitle>Pre-Engineered Building(PEB)</CTitle>
              <CDes>
                A forklift is a powered industrial truck used to lift and move
                materials over short distances.
              </CDes>
            </PCard>
            <PCard category={4}>
              <CImg src="images/products/construction/10.png"></CImg>
              <CTitle>Rotary Dril</CTitle>
              <CDes>
                Rotary drilling is used to form a deep observation borehole or
                for obtaining representative samples of rock.
              </CDes>
            </PCard>
            <PCard category={4}>
              <CImg src="images/products/construction/11.png"></CImg>
              <CTitle>Water well drill</CTitle>
              <CDes>
                Well drilling is the process of drilling a hole in the ground
                for the extraction of a natural resource such as ground water
              </CDes>
            </PCard>
            <PCard category={2}>
              <CImg src="images/products/construction/crusher.png"></CImg>
              <CTitle>Crusher</CTitle>
              <CDes>
                Crushers are machines used to reduce the size of rocks, stones
                and ore.
              </CDes>
            </PCard>
          </PMain>
        </PLayout>
      </div>
    </AgriculturalContext.Provider>
  );
}
