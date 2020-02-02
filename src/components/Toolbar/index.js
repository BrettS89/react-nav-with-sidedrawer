import React from 'react';
import './Toolbar.css';
import DrawerButton from '../SideDrawer/Button';

const Toolbar = ({ drawerClickHandler }) => {
  return (
    <header className="Toolbar">
      <nav className="Toolbar-navigation">
        <div className="burger">
          <DrawerButton click={drawerClickHandler} />
        </div>
        <div className="Toolbar-logo"><a href="/">Logo</a></div>
        <div className="spacer"></div>
        <div className="Toolbar-nav-items">
          <ul>
            <li><a href="">Products</a></li>
            <li><a href="">Users</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
