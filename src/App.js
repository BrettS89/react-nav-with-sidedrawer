import React from 'react';
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggle = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { sideDrawerOpen } = this.state;
    let backDrop;

    if (sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggle} />
        <SideDrawer show={sideDrawerOpen} />
        {backDrop}
        <main style={{ marginTop: '56px' }}>
          <p>
            This is the page content
          </p>
        </main>
      </div>
    );
  }
}

export default App;
