import PropTypes from "prop-types";
import NavbarMaker from "./NavbarMaker";

const Layout = ({ children }) => {
  return (
    <div className="font-mono h-full min-h-screen bg-gradient-to-br from-cyan-300 to-orange-200 dark">
      <NavbarMaker />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
