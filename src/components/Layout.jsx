import PropTypes from "prop-types";
import NavbarMaker from "./NavbarMaker";

const Layout = ({ children }) => {
  return (
    <div className="font-mono h-full min-h-screen w-screen bg-blue-200">
      <NavbarMaker />
      {children}
      <p>Created by Anish Sahoo</p>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
