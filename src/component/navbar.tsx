import { useState } from "react";
import { navItems } from "../config/navbar";
import NavItem from "../navigation/NavItem";
import menu from "../assets/images/Menu.png";
import logo from "../assets/images/volt.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center px-2 lg:px-12 py-4">
        <div
          onClick={() => navigate("/")}
          className="w-22 h-20  relative top-2 cursor-pointer"
        >
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          {/* <h3>Volt</h3> */}
        </div>
        <div className="flex-1 mx-8 p-2.5 text-md font-medium">
          <div className="hidden md:flex ">
            {navItems.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </div>
        </div>

        <div
          className="flex md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={menu} alt="" />
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white p-4 z-40">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavItem
                  key={item.path}
                  item={item}
                  closeMenu={() => setIsOpen(false)}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
