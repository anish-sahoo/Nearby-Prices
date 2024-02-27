import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const NavbarMaker = () => {
  return (
      <Navbar isBlurred={true} className="light">
        <NavbarContent className="flex">
          <NavbarBrand className="text-3xl font-sans text-gray-800">
            Prices Nearby
          </NavbarBrand>
          <NavbarItem className="mx-4 text-gray-800">
            <Link to="/">Discover</Link>
          </NavbarItem>
          <NavbarItem className="mx-4 text-gray-800">
            <Link to="/test">Test</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
  );
};

export default NavbarMaker;
