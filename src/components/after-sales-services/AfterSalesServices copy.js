import React from "react";
import SLayout, {
  SDes,
  SHeader,
  SMain,
  STitle,
} from "../section-layout/SectionLayout";

export default function AfterSalesServices({ children }) {
  return (
    <div id="afterSalesServices" className="relative">
      <SLayout>
        <SHeader>
          <STitle>After-sales Services</STitle>
          <SDes>
            Our technical Support team which is led by senior engineers is the
            back bone of our business in making customers to rely on the
            products that we supply. Our motto is not selling machineries but
            giving solutions to customers on their construction sector demand.
            To do so we have a well-organized and established after sales
            services this located in Bole Bulbula behind St. George Church.
          </SDes>
        </SHeader>
        <SMain>
          <Row>
            <Col>
              <Image src="operator-training.png"></Image>
              <Title>Operators Training</Title>
            </Col>
            <Col>
              <Image src="maintenance.png"></Image>
              <Title>
                Onsite Maintenance of the Machineries/Mobile Workshop/
              </Title>
            </Col>
            <Col>
              <Image src="maintenance-onsite.png"></Image>
              <Title>Maintenance at Our Workshop</Title>
            </Col>
          </Row>
        </SMain>
      </SLayout>
    </div>
  );
}
export function Row({ children, className }) {
  return (
    <div
      className={
        "flex flex-wrap lg:flex-nowrap items-start rounded-[2rem] p-3 gap-4 " +
        className
      }
    >
      {children}
    </div>
  );
}
export function Col({ children, order, className }) {
  return (
    <div
      className={
        "w-full lg:w-1/3 max-w-sm mx-auto flex flex-col justify-center " +
        className
      }
    >
      {children}
    </div>
  );
}
export function Box({ children, className }) {
  return (
    <div className={"p-5 flex flex-col gap-3 " + className}>{children}</div>
  );
}
export function Title({ children, className }) {
  return (
    <div className={"font-bold py-2 text-center " + className}>{children}</div>
  );
}
export function Image({ children, className, src }) {
  return (
    <img
      className={"text-xl font-bold " + className}
      src={"images/after-sales-services/" + src}
      alt="services"
    />
  );
}
