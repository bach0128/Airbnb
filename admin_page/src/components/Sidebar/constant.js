import { BiBookmarks } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { BiRun } from "react-icons/bi";

export const sidebarItems = [
  {
    name: "Users",
    href: "/users",
    icon: BsPeople,
  },
  {
    name: "Bookings",
    href: "/bookings",
    icon: BiBookmarks,
  },
  {
    name: "Places",
    href: "/places",
    icon: MdPlace,
  },
  {
    name: "Trips",
    href: "/trips",
    icon: BiRun,
  },
];
