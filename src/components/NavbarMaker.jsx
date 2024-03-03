import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

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
          <Link to="/test">Contribute</Link>
        </NavbarItem>
        <NavbarItem>
          {theme === "dark" ? (
            <Button
              className="text-4xl"
              onClick={() => setTheme("light")}
              variant="light"
            >
              <MdOutlineDarkMode />
            </Button>
          ) : (
            <Button
              className="text-4xl"
              onClick={() => setTheme("dark")}
              variant="light"
            >
              <MdOutlineLightMode />
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarMaker;
