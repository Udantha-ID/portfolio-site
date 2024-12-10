"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Ensure this is installed: `npm install framer-motion`
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "", title: "Home" },
    { id: "about", title: "About" },
    { id: "project", title: "Project" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-0 fixed top-0 z-20 ${
        scrolled ? "bg-transparent backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl">
        {/* Logo Section */}
        <a
          href="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="logo" width={140} height={undefined} />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            <span className="sm:block hidden">Full Stack Developer</span>
          </p>
        </a>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
            key={nav.id}
            className={`${
              active === nav.title
                ? "text-white"
                : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
            } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`} className="relative z-10">
              {nav.title}
            </a>
            {active === nav.title && (
              <motion.span
                layoutId="pill-tab"
                transition={{ type: "spring", duration: 0.5 }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
              />
            )}
          </li>
          
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src="/menu.svg"
            alt="menu"
            width={28}
            height={28}
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer text-blue-200"
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex sm:hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-2 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-blue-200"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
