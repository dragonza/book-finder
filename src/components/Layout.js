import React from "react";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div>
      {children}
      <footer className="footer">
        Made by{" "}
        <a
          rel="noopener noreferrer"
          href="https://dragonza.io"
          target="_blank"
          className="footer__link"
        >
          Dragonza
        </a>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
