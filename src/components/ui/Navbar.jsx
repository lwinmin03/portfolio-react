import {  NavLink } from "react-router-dom";
import TextCursor from "./TextCursor.jsx";
import { li } from "motion/react-client";

const Navbar = () => {
  const navLinks = [
 
    { id: 2, name: "Projects",href:"/projects" },
    { id: 3, name: "ABOUT",href:"/about"},
    { id: 4, name: "CONTACT" },
    {id:5,name:"Github"}
  ];

  return (
    <div
      className={` rounded-sm h-full  flex flex-col justify-around items-center text-gray-900`}
    >
      {navLinks.map((link) => (
        <NavLink to={link.href} className={`py-2  px-3 -rotate-90 text-white rounded-md text-sm`} key={link.id}>
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
