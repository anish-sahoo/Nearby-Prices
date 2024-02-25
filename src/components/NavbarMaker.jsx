import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link
} from "@nextui-org/react";

const NavbarMaker = () => {
  return (
    <div className="w-full bg-blue-500">
      <Navbar>
        <NavbarContent className="flex">
          <NavbarBrand className="text-3xl font-sans">Prices Nearby</NavbarBrand>
          <NavbarItem className="mx-4">
          <Link color="primary">Discover</Link>
          </NavbarItem>
          <NavbarItem className="mx-4">
            <Link color="primary">About</Link>
          </NavbarItem>
          <NavbarItem className="mx-4">
          <Link color="primary">Contact</Link>
          </NavbarItem>
        </NavbarContent>
    </Navbar>
    </div>
  );
};

export default NavbarMaker;