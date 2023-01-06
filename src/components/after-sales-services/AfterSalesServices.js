import React from "react";
import SLayout, {
  SDes,
  SHeader,
  SMain,
  STitle,
} from "../section-layout/SectionLayout";
import List, { Item } from "../whatweimport/List";

export default function AfterSalesServices({ children }) {
  return (
    <div id="afterSalesServices" className="bg-white relative">
      <SLayout>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2">
            <img src="/images/after-sales-services.png" alt="after sales" />
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:px-8 py-4">
            <div className="flex flex-col gap-4 relative mb-4">
              <STitle>After-sales Services</STitle>
              <div className="text-gray-500">
                Our technical Support team which is led by senior engineers is
                the back bone of our business in making customers to rely on the
                products that we supply. Our motto is not selling machineries
                but giving solutions to customers on their construction sector
                demand. To do so we have a well-organized and established after
                sales services this located in Bole Bulbula behind St. George
                Church.
              </div>
            </div>
            <List>
              <Item>Operators Training</Item>
              <Item>
                Onsite Maintenance of the Machineries/Mobile Workshop/
              </Item>
              <Item>Maintenance at Our Workshop</Item>
            </List>
          </div>
        </div>
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
