import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header'

function Layout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}


Layout.propTypes = {
  children: PropTypes.element.isRequired,
};


export default Layout;
