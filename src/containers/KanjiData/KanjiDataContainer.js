import React from 'react';
import { connect } from 'react-redux';

import { requestAPIData } from './actions';
import KanjiData from '../../components/KanjiData';

class KanjiDataContainer extends React.Component {  
  render() {
    const { fetching, error, data, onRequestData } = this.props;
    return (
      <div>
        <KanjiData 
          fetching={fetching}
          error={error}
          data={data}
          onRequestData={onRequestData} />
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

const mapDispatchToProps = dispatch => {
  return {
    onRequestData: data => dispatch(requestAPIData(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanjiDataContainer);
