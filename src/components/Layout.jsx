import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Database Design Project 1</h1>
      {children}
      <p>Created by Anish Sahoo</p>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
