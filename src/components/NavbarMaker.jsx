import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const NavbarMaker = () => {
  const textStyle = "text-gray-800 dark:text-gray-100";
  return (
    <Navbar isBlurred={true} className="">
      <NavbarContent className="flex">
        <NavbarBrand className={`text-3xl font-sans ${textStyle}`}>
          Prices Nearby
        </NavbarBrand>
        <NavbarItem className={`mx-4 ${textStyle}`}>
          <Link to="/">Discover</Link>
        </NavbarItem>
        <NavbarItem className={`mx-4 ${textStyle}`}>
          <Link to="/test">Test</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarMaker;
