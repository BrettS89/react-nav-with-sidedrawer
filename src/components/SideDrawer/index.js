import React from 'react';
import './Drawer.css';

const SideDrawer = ({ show }) => {
  let drawerClasses = 'side-drawer';

  if (show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="/">Products</a></li>
        <li><a href="/">Users</a></li>
      </ul>
    </nav>
  );
}

export default SideDrawer;