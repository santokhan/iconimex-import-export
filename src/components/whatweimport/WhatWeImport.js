import SLayout, {
  SHeader,
  SIcon,
  SMain,
  STitle,
  SDes,
} from "../section-layout/SectionLayout";
import { Box, Col, Row, Title } from "./CardLayout";
import List, { Item } from "./List";
import Dots from "../dots/Dots";

export default function WhatWeImport() {
  return (
    <div id="whatWeImport">
      <SLayout>
        <Dots></Dots>
        <SHeader>
          <STitle>What we do</STitle>
          <SDes></SDes>
        </SHeader>
        <SMain>
          <div className="hidden lg:block absolute -right-12 -top-4 w-48 h-48 bg-blue-500 rounded-full shadow-2xl z-[-1]"></div>
          <div className="hidden lg:block absolute -left-12 -bottom-4 w-48 h-48 bg-purple-500 rounded-full shadow-2xl z-[-1]"></div>
          <Row>
            <Col order={1}>
              <Box>
                <Title>Construction & Earth Moving Machinery Import</Title>
                <div className="text-textgray">
                  With the ever growth economy of our continent, Construction
                  Equipment’s and Earth Moving Machinery plays a vital role.
                  Icon import contributes for this huge development by importing
                  high quality, advanced and greatly relevant construction
                  machineries from different part of continents. Thus are
                </div>
                <List>
                  <Item>
                    Asphalt & Concrete Batching Plant (Stationary & Mobile)
                  </Item>
                  <Item>Earth Moving Machines</Item>
                  <Item>Crawler & Wheeled Excavator</Item>
                  <Item>Pre-Engineered Building(PEB)</Item>
                </List>
              </Box>
            </Col>
            <Col order={2}>
              <img
                src="images/excavator.png"
                alt="card"
                className="w-full h-full object-cover rounded-[20px] overflow-hidden"
              />
            </Col>
          </Row>
          <Row>
            <Col order={2}>
              <Box>
                <Title>Industrial machinery Import</Title>
                <div className="text-textgray">
                  We have a wide range of products for governmental &
                  nongovernmental organizations that are appropriate from small
                  to large-scale projects. We strive to offer clients
                  cost-effective solutions that are robust, appropriate to the
                  need, and easy to implement. Which use like
                </div>
                <List>
                  <Item>Block making Machines</Item>
                  <Item>Concrete Pipe making Machines</Item>
                  <Item>Plastic Extruder Production Lines</Item>
                </List>
              </Box>
            </Col>
            <Col order={1}>
              <img
                src="images/industrial-short.jpg"
                alt="card"
                className="w-full h-auto object-cover rounded-[20px] overflow-hidden"
              />
            </Col>
          </Row>
          <Row>
            <Col order={1}>
              <Box>
                <Title>Light & Heavy Duty Vehicles Import</Title>
                <div className="text-textgray">
                  Our company import well-known brand of vehicles & trucks.
                </div>
                <List>
                  <Item>Automobiles</Item>
                  <Item>Pickups</Item>
                  <Item>Station wagon</Item>
                  <Item>Mini-buses, vans and Buses</Item>
                  <Item>Trucks</Item>
                </List>
              </Box>
            </Col>
            <Col order={2}>
              <img
                src="images/car-import-short.jpeg"
                alt="card"
                className="w-full h-full object-cover rounded-[20px] overflow-hidden"
              />
            </Col>
          </Row>
          <div id="whatWeExport">
            <Row>
              <Col order={2}>
                <Box>
                  <Title>Export Agriculture Product:</Title>
                  <div className="text-textgray">
                    Our export business delivers superior Ethiopian Agricultural
                    products to the rest of the world. We offer an extensive
                    range of top-quality oil seeds, Pulses and Green Coffee
                    Beans of Ethiopian Origin both washed & natural green from
                    the birth place of Arabica Coffee to global coffee buyers &
                    roasters. Our main aim is to provide the rich Ethiopian
                    Coffee to the world.
                  </div>
                  <div>
                    <div className="font-bold">Oil seeds</div>
                    <div className="p-2">
                      <List>
                        <Item>Sesame seeds (Humera & Wollega)</Item>
                        <Item>Niger seeds</Item>
                      </List>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Pulse</div>
                    <div className="p-2">
                      <List>
                        <Item>Chick Beans (Kabuli & Desi)</Item>
                        <Item>Green Mung Bean</Item>
                        <Item>Soya Beans</Item>
                        <Item>Kidney Beans</Item>
                      </List>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Coffee</div>
                    <div className="p-2">
                      <List>
                        <Item>YirgaCheffe</Item>
                        <Item>Sidama</Item>
                        <Item>Harrar</Item>
                        <Item>Limmu</Item>
                      </List>
                    </div>
                  </div>
                </Box>
              </Col>
              <Col order={1}>
                <img
                  src="images/all-seeds-2.jpeg"
                  alt="card"
                  className="w-full h-full object-cover rounded-[20px] overflow-hidden"
                />
              </Col>
            </Row>
          </div>
        </SMain>
      </SLayout>
    </div>
  );
}
