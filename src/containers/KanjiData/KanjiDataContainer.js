import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import KanjiData from '../../components/KanjiData';

class KanjiDataContainer extends React.Component {  
  static propTypes = {
		fetching: PropTypes.bool.isRequired,
		error: PropTypes.string.isRequired,
		data: PropTypes.array,
  }
 
  render() {
    const { fetching, error, data } = this.props;

    return (
      <div>
        <KanjiData 
          fetching={fetching}
          error={error}
          data={data}
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.api.fetching,
    error: state.api.error,
    data: state.api.data
  };
};


export default connect(
  mapStateToProps,
)(KanjiDataContainer);
