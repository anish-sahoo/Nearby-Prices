import PropTypes from "prop-types";
import NavbarMaker from "./NavbarMaker";

const Layout = ({ children }) => {
  return (
    <div className="font-mono">
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
