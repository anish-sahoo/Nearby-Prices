import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const NavbarMaker = () => {
  return (
    <div className="w-full bg-blue-500">
      <Navbar>
        <NavbarContent className="flex">
          <NavbarBrand className="text-3xl font-sans">
            Prices Nearby
          </NavbarBrand>
          <NavbarItem className="mx-4">
            <Link to="/">Discover</Link>
          </NavbarItem>
          <NavbarItem className="mx-4">
            <Link to="/test">Test</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavbarMaker;
