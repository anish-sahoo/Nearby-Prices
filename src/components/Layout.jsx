import PropTypes from "prop-types";
import NavbarMaker from "./NavbarMaker";

const Layout = ({ children }) => {
  const darkColors = "dark:bg-gradient-to-br dark:from-tealOrangeBlue dark:to-orange-900";
  const lightColors = "bg-gradient-to-br from-cyan-400 to-orange-300";
  return (
    <div className={`font-mono h-full min-h-screen ${lightColors} ${darkColors} pb-2`}>
      <NavbarMaker />
      {children}
      <h3 className="text-gray-800 text-center mt-12">
        Created by{" "}
        <a href="https://asahoo.dev" className="text-blue-700">
          Anish Sahoo
        </a>
        , for CS 3200 Database Design, Spring 2024
      </h3>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
