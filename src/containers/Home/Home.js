import React from 'react';
import { connect } from 'react-redux';

class HomeContainer extends React.Component {
  static propTypes = {

  }

  render = () => (
    <div>
      Home
    </div>
  )
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
