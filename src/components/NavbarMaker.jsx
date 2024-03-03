import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";

const NavbarMaker = () => {
  const textStyle = "text-gray-800 dark:text-gray-100";
  const { theme, setTheme } = useTheme();
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
        <NavbarItem>
          {theme === "dark" ? (
            <Button onClick={() => setTheme("light")}>Light</Button>
          ) : (
            <Button onClick={() => setTheme("dark")}>Dark</Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarMaker;
