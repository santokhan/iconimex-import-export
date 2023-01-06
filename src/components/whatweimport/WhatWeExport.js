import SLayout, {
  SHeader,
  SIcon,
  SMain,
  STitle,
  SDes,
} from "../section-layout/SectionLayout";
import { Box, Col, Row, Title } from "./CardLayout";
import List, { Item } from "./List";

export default function WhatWeExport() {
  return (
    <div id="whatWeImport">
      <SLayout>
        <SHeader>
          <STitle>What we export?</STitle>
          <SDes></SDes>
        </SHeader>
        <SMain>
          <Row>
            <Col order={1}>
              <Box>
                <Title>Industrial machinery Export</Title>
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
            <Col order={2}>
              <img
                src="images/robot.png"
                alt="card"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </Col>
          </Row>
          <Row>
            <Col order={2}>
              <Box>
                <Title>Light &Heavy-Duty Vehicles Export</Title>
                <div className="text-textgray">
                  Our company export well-known brand of vehicles & trucks.
                  Ford, BMW, Audi and Chrysler belong to the most popular
                  exported car brands. Among the Japanese manufacturers, Mazda
                  is in popular demand, but Toyota and Honda are also popular.
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
            <Col order={1}>
              <img
                src="images/cars.png"
                alt="card"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </Col>
          </Row>
          <Row>
            <Col order={1}>
              <Box>
                <Title>Industrial machinery Export</Title>
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
            <Col order={2}>
              <img
                src="images/bulldozer.png"
                alt="card"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </Col>
          </Row>
          <Row>
            <Col order={2}>
              <Box>
                <Title>Industrial machinery Export</Title>
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
                src="images/all-seeds.png"
                alt="card"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </Col>
          </Row>
        </SMain>
      </SLayout>
    </div>
  );
}
