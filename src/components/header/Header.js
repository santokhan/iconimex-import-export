import { useLayoutEffect, useState, useEffect } from "react";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import Social from "../social/Social";
import MobileMenu from "./navbar-mobile/Mobile";

export default function Header({ children }) {
  const [scrollY, setscrollY] = useState(0);
  const [H, setH] = useState(600);

  function handleH() {
    // const h = window.innerHeight;
    // setH(h);
    // console.log({ H });
  }
  function handleScroll() {
    const position = window.scrollY;
    setscrollY(position);
    // console.log(scrollY);
  }

  useEffect(() => {
    window.addEventListener("load", handleH, { passive: true });

    return () => {
      window.addEventListener("load", handleH);
    };
  }, [H]);

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <header
      className={
        scrollY > H
          ? "w-full h-12 lg:h-16 flex justify-between items-center px-4 shadow z-[100] bg-white fixed drop-navbar"
          : "w-full h-12 lg:h-16 flex justify-between items-center px-4 shadow z-[100] bg-white relative"
      }
    >
      <Logo></Logo>
      <Navbar></Navbar>
      <div className="hidden lg:block py-2">
        <Social></Social>
      </div>
      <MobileMenu></MobileMenu>
    </header>
  );
}
