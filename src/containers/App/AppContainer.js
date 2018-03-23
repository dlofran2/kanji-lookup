import React, { Component } from 'react';

import HeaderContainer from '../Header';

import './AppContainer.css';

class AppContainer extends Component {
  render() {
    return (
      <div className="app">
        <HeaderContainer />
        {this.props.children}
      </div>
    );
  }
}

export default (AppContainer);