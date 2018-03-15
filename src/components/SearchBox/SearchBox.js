import React from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';

import cancel from './assets/cancel.svg';
import logo from './assets/sushi.svg';

class SearchBox extends React.Component {
  static propTypes = {
    searchVisibility: PropTypes.bool.isRequired,
    toggleSearchBox: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var value = e.target.value;
    this.setState({ searchValue: value });
  }

  render() {
    var visibility = "hide";

    if (this.props.searchVisibility) {
      visibility = "show";
    }

    return (
      <div id='searchPane' className={visibility}>
        <div className="logoIcon">
          <img 
            src={logo}
            alt="Logo"
          />
        </div>
        <input
          id='search'
          className='searchInput'
          placeholder='Search..'
          type='text'
          autoComplete='off'
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <button onClick={this.props.toggleSearchBox}>
          <img 
            src={cancel}
            className="cancelIcon"
            alt="Cancel"
          />
        </button> 
      </div>
    );
  }
}

export default SearchBox;
