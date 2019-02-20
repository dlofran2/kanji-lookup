import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { requestAPIData } from "../KanjiData/actions";

import KanjiDataContainer from "../KanjiData";
import Home from "../../components/Home";
import SearchForm from "../../components/SearchForm";
import Loading from "../../components/Loading";

class HomeContainer extends React.Component {
  static propTypes = {
    fetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    data: PropTypes.array,
    onRequestData: PropTypes.func.isRequired
  };

  handleSearchSubmit = (value, onRequestData) => {
    onRequestData(value);
  };

  render() {
    const { fetching, error, data, onRequestData } = this.props;

    return (
      <div>
        <SearchForm
          onSubmit={values =>
            this.handleSearchSubmit(values.Search, onRequestData)
          }
        />
        {data.length === 0 && error === "" && fetching === false && <Home />}
        {(data.length > 0 || error !== "") && fetching === false && (
          <KanjiDataContainer />
        )}
        {fetching === true && <Loading />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isNavOpen: state.isNavOpen,
  fetching: state.api.fetching,
  error: state.api.error,
  data: state.api.data
});

const mapDispatchToProps = dispatch => {
  return {
    onRequestData: data => dispatch(requestAPIData(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
