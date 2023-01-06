import SLayout, { SDes, SMain, STitle } from "../section-layout/SectionLayout";

export default function About() {
  return (
    <div id="about">
      <SLayout>
        <SMain>
          <div className="max-w-2xl mx-auto relative py-4 lg:py-10">
            <div className="hidden lg:flex flex-nowrap gap-2 justify-center items-center absolute -right-40 bottom-2 -rotate-90">
              <a href="http://iconimex.com" className="font-semibold">
                iconimex.com
              </a>
              <div className="vertical-line bg-blue-500"></div>
            </div>

            <div className="mb-4 relative border-l-4 pl-3 lg:pl-0 border-blue-500 lg:border-none flex justify-start">
              <div className="horizontal-line bg-blue-500 absolute -left-48 top-2 hidden lg:block"></div>
              <STitle>About us</STitle>
            </div>
            <SDes>
             ICON IMPORT & EXPORT is a private Owned Company Established in according with the Ethiopian Commercial law in 2011 G.C. Mainly Engaged in importing of Construction & Industrial Machines, Light duty & Heavy duty Vehicles and Export agricultural product to different parts of the world.
            </SDes>
            <div className="flex flex-nowrap gap-2 justify-end items-center lg:hidden py-3">
              <a href="http://iconimex.com" className="font-semibold">
                iconimex.com
              </a>
              <div className="vertical-line bg-blue-500"></div>
            </div>
          </div>
        </SMain>
      </SLayout>
    </div>
  );
}
