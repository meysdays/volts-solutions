// import React from 'react'

import { NavLink } from "react-router-dom";
import type { NavItemType } from "../data/types";

interface Props {
  item: NavItemType;
  closeMenu?: () => void;
}

const NavItem = ({ item, closeMenu }: Props) => {
  return (
    <NavLink
      to={item.path}
      className= {({ isActive }) =>
        `  transition-colors  w-1/3 mr-1
    ${isActive ? "text-brand-yellow" : "text-gray-700 hover:text-brand-yellow"}
    `
      }
      onClick={() => {
        if (closeMenu) closeMenu();
      }}
    >
      {item.name}
    </NavLink>
  );
};

export default NavItem;
