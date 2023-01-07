import { useState } from "react";
import Social from "../../social/Social";
import { useLocation } from "react-router-dom";

export default function MobileMenu() {
  const [menu, setmenu] = useState(false);
  function handleMenu() {
    setmenu(!menu);
  }

  const [dropdown, setdropdown] = useState(true);
  const [dropImport, setdropImport] = useState(true);
  const [dropExport, setdropExport] = useState(true);
  function handleDropdown() {
    setdropdown(!dropdown);
  }
  function handleDropImport() {
    setdropImport(!dropImport);
  }
  function handleDropExport() {
    setdropExport(!dropExport);
  }

  return (
    <div className="relative block lg:hidden">
      <button type="button" onClick={handleMenu}>
        {menu ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.46997 13.4599L12 9.93994L15.53 13.4599"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.46997 10.6399L12 14.1599L15.53 10.6399"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {menu ? (
        <nav className="w-[calc(100vw)] h-[calc(100vh_-_48px)] absolute -right-4 top-9 bg-white shadow py-2 z-[99] flex flex-col px-4">
          <ul className="flex flex-col">
            <NavItem path="/">home</NavItem>
            <NavItem path="/#about">about</NavItem>
            <li className="h-full relative capitalize">
              <button
                type="button"
                onClick={handleDropdown}
                className="w-full capitalize flex items-center justify-between gap-2 py-2 px-4 hover:bg-gray-50"
              >
                services{" "}
                <svg
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={dropdown ? "rotate-180" : ""}
                >
                  <path
                    d="M9 1L5.70707 3.7559C5.31819 4.08137 4.68182 4.08137 4.29294 3.7559L1 1"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {dropdown ? (
                <ul className="bg-white px-4">
                  <li className="h-full relative capitalize">
                    <button
                      type="button"
                      onClick={handleDropImport}
                      className="w-full capitalize flex items-center justify-between gap-2 py-2 px-4 hover:bg-gray-50"
                    >
                      import{" "}
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={dropImport ? "rotate-180" : ""}
                      >
                        <path
                          d="M9 1L5.70707 3.7559C5.31819 4.08137 4.68182 4.08137 4.29294 3.7559L1 1"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {dropImport ? (
                      <ul className="bg-white px-4">
                        <NavItem path="/#construnction">
                          construction machinery
                        </NavItem>
                        <NavItem path="/#industrial">
                          industrial machnery
                        </NavItem>
                        <NavItem path="/#vehicle">vehicle import</NavItem>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>

                  <li className="h-full relative capitalize">
                    <button
                      type="button"
                      onClick={handleDropExport}
                      className="w-full capitalize flex items-center justify-between gap-2 py-2 px-4 hover:bg-gray-50"
                    >
                      export{" "}
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={dropExport ? "rotate-180" : ""}
                      >
                        <path
                          d="M9 1L5.70707 3.7559C5.31819 4.08137 4.68182 4.08137 4.29294 3.7559L1 1"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {dropExport ? (
                      <ul className="bg-white px-4">
                        <NavItem path="/#agricultural">pulse</NavItem>
                        <NavItem path="/#agricultural">seeds</NavItem>
                        <NavItem path="/#agricultural">coffee</NavItem>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                  <NavItem path="/#afterSalesServices">
                    after sales services
                  </NavItem>
                </ul>
              ) : (
                ""
              )}
            </li>
            <NavItem path="/contact">contact</NavItem>
          </ul>
          <div className="mt-auto pt-10 pb-3">
            <Social></Social>
          </div>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
}
export function NavItem({ children, path }) {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <li className="h-full relative capitalize">
      <a
        href={path}
        className={
          pathname === path
            ? "font-medium transition-all ease-in block hover:bg-gray-50 py-2 px-4 text-blue-400"
            : "font-medium transition-all ease-in block hover:bg-gray-50 py-2 px-4 text-raisin"
        }
      >
        {children}
      </a>
    </li>
  );
}
