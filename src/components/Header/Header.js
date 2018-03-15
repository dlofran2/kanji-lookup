import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import dropdownImg from './assets/dropdown.svg';

class Header extends Component {
	static propTypes = {
		requestNavOpen: PropTypes.func.isRequired,
	}

	render() {
		const { requestNavOpen } = this.props;
		return (
			<div className="grid">
				<div className="title">
					<h1>Learn Japanese</h1>
				</div>
				<div className="dropdown">
					<button 
						onClick={requestNavOpen}
						className="dropdownIcon"
					>
						<img
							src={dropdownImg}
							className="dropdownIcon"
							alt="Dropdown" />
					</button>
				</div>
			</div>	
		);
	}
}

export default Header;
