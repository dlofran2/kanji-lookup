import React from 'react';
import { connect } from 'react-redux';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isNavOpen: state.isNavOpen
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
