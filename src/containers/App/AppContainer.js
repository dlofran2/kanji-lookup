import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
