import React from 'react';
import { connect } from 'react-redux';

class AboutContainer extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div>
      About
    </div>
  )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutContainer);
