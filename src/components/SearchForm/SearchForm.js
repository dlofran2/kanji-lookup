import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import "./SearchForm.css";

import search from "./assets/search.svg";

class SearchForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="searchArea">
        <div className="searchBox">
          <Field
            name="Search"
            component="input"
            type="text"
            placeholder="Search..."
            autoComplete="off"
            className="searchInputForm"
            onFocus={e => e.preventDefault}
          />
        </div>
        <div className="searchButton">
          <button type="submit">
            <img src={search} alt="Search" className="searchIcon" />
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "kanjiPage"
})(SearchForm);
