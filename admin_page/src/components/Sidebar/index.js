"use client";
import Image from "next/image";
import { sidebarItems } from "./constant";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { SiAirbnb } from "react-icons/si";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "react-icons/";

const Sidebar = ({ children }) => {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebarcollapse = function (toggleSidebar) {
    isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true);
  };
  return (
    <div
      className="bg-gray-800 text-white shadow-sm h-100 border-r-2 border-x-cyan-950"
      data-collapse={isCollapsed}
    >
      <div className="sidebar flex w-full">
        <ul className="sidebar__list flex flex-col mt-2 w-full">
          <li className="flex items-center justify-between text-3xl mx-2 text-red-600 relative">
            <a href="/" className="flex items-center justify-center">
              <SiAirbnb />
              {isCollapsed ? "" : <h1 className="ml-1">Airbnb</h1>}
            </a>
            <button className="btn-primary" onClick={toggleSidebarcollapse}>
              {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
            </button>
          </li>
          <hr className="text-white text-2xl  mt-3" />

          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item p-1 w-full min-h-6" key={name}>
                <Link
                  className={`sidebar__link inline-flex items-center w-full p-2 text-xl hover:bg-slate-100 hover:text-zinc-700 border border-transparent rounded ${
                    router.asPath === href
                      ? "sidebar__link--active bg-slate-100 text-zinc-700 "
                      : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon mr-2">
                    <Icon />
                  </span>
                  {isCollapsed ? (
                    ""
                  ) : (
                    <span className="sidebar__name">{name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Sidebar;
