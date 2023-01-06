import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar({ children }) {
  const [dropdown, setdropdown] = useState(false);
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
    <nav>
      <ul className="hidden list-none lg:flex lg:items-stretch lg:justify-center">
        <NavItem path="/">home</NavItem>
        <NavLink path="/#about">about</NavLink>
        <li className="h-full py-5 px-6 relative capitalize parent-1">
          <button
            type="button"
            onClick={handleDropdown}
            className="capitalize flex items-center gap-2"
          >
            services{" "}
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          <ul className="bg-white w-72 absolute right-0 top-full shadow px-2 py-2 hidden dropdown-child-1">
            <li className="h-full relative capitalize parent-2">
              <button
                type="button"
                onClick={handleDropImport}
                className="w-full capitalize flex items-center justify-between gap-2 py-2 px-4 hover:text-red-800"
              >
                Import{" "}
                <svg
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-rotate-90"
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
              <ul className="bg-white px-4 py-4 hidden absolute left-full top-0 dropdown-child-2 whitespace-nowrap">
                <DropdownItem path="/#vehicle">
                  construction machinery
                </DropdownItem>
                <DropdownItem path="/#industrial">
                  industrial machinery
                </DropdownItem>
                <DropdownItem path="/#vehicle">vehicle</DropdownItem>
              </ul>
            </li>
            <li className="h-full relative capitalize parent-2">
              <button
                type="button"
                onClick={handleDropExport}
                className="w-full capitalize flex items-center justify-between gap-2 py-2 px-4 hover:text-red-800"
              >
                export{" "}
                <svg
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-rotate-90"
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
              <ul className="bg-white px-4 py-4 hidden absolute left-full top-0 dropdown-child-2 whitespace-nowrap">
                <DropdownItem path="/#agricultural">pulse</DropdownItem>
                <DropdownItem path="/#agricultural">oil seeds</DropdownItem>
                <DropdownItem path="/#agricultural">coffee</DropdownItem>
              </ul>
            </li>
            <DropdownItem path="/#afterSalesServices">
              after sales services
            </DropdownItem>
          </ul>
        </li>
        <NavItem path="/contact">contact</NavItem>
      </ul>
    </nav>
  );
}
export function NavItem({ children, path }) {
  const { pathname } = useLocation();

  return (
    <li className="h-full py-5 px-6 relative capitalize font-medium">
      <Link
        to={path}
        className={
          pathname === path
            ? "underline underline-offset-4 decoration-2 text-red-800 transition-all ease-in duration-100"
            : "hover:underline hover:underline-offset-4 hover:decoration-2 text-gray-900 transition-all ease-in"
        }
      >
        {children}
      </Link>
    </li>
  );
}
export function NavLink({ children, path }) {
  return (
    <li className="h-full py-5 px-6 relative capitalize font-medium">
      <a
        href={path}
        className={
          "hover:underline hover:underline-offset-4 hover:decoration-2 text-gray-900 transition-all ease-in duration-100"
        }
      >
        {children}
      </a>
    </li>
  );
}
export function DropdownItem({ children, path }) {
  return (
    <li className="py-2 px-4 relative font-medium">
      <a
        href={path}
        className="hover:text-red-800 hover:underline hover:underline-offset-4 hover:decoration-2 capitalize text-gray-900 transition-all ease-in"
      >
        {children}
      </a>
    </li>
  );
}
