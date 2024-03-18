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
import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";
import { ToastContainer, toast } from "react-toastify";

const NavbarMaker = () => {
  const textStyle = "text-gray-800 dark:text-gray-100";
  const { theme, setTheme } = useTheme();
  const [selectedItem, setSelectedItem] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      console.log("Logged in");
    } else {
      setIsLoggedIn(false);
      console.log("Logged out");
    }
  }, []);

  useEffect(() => {
    console.log("Is logged in", isLoggedIn);
  }, [isLoginModalOpen, isLoggedIn]);

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <Navbar isBlurred={true} className="justify-center">
      <NavbarContent>
        <ToastContainer theme="colored" />
        <NavbarBrand
          className={`text-lg med:text-3xl lg:text-3xl font-sans ${textStyle}`}
        >
          Prices Nearby
        </NavbarBrand>
        <NavbarItem
          className={`mx-4 text-lg ${textStyle} hidden md:flex ${selectedItem === 0 ? "font-bold" : ""}`}
        >
          <Link to="/" onClick={() => setSelectedItem(0)}>
            Discover
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`mx-4 text-lg ${textStyle} hidden md:flex ${selectedItem === 1 ? "font-bold" : ""}`}
        >
          <Link to="/test" onClick={() => setSelectedItem(1)}>
            Contribute
          </Link>
        </NavbarItem>
        <NavbarItem>
          {isLoggedIn ? (
            <Button
              className={`flex text-lg text-red-500`}
              variant="flat"
              onClick={() => handleLogout()}
            >
              Log Out
            </Button>
          ) : (
            <Button
              className={`flex text-lg hover:text-green-500`}
              variant="flat"
              onClick={() => handleLogin()}
            >
              Log In
            </Button>
          )}
        </NavbarItem>
        <NavbarItem>
          {theme === "dark" ? (
            <Button
              className="text-2xl flex"
              onClick={() => setTheme("light")}
              variant="light"
            >
              <MdOutlineDarkMode />
            </Button>
          ) : (
            <Button
              className="text-2xl flex"
              onClick={() => setTheme("dark")}
              variant="light"
            >
              <MdOutlineLightMode />
            </Button>
          )}
        </NavbarItem>
        {isLoginModalOpen && (
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={() => {
              setIsLoginModalOpen(false)
              if(isLoggedIn) {
                toast.success("Logged in successfully");
              }
            }}
            setLoggedIn={(status) => setIsLoggedIn(status)}
          />
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarMaker;
