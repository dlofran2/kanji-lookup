import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

import NavMenu from '../../components/NavMenu';
import Header from '../../components/Header';

class HeaderContainer extends Component {	
	render() {
		const { isNavOpen, requestNavClose, requestNavOpen } = this.props; 
		return (
			<div>
				<NavMenu 
					menuVisibility={isNavOpen}
					toggleNavMenu={requestNavClose} />
				<Header requestNavOpen={requestNavOpen} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isNavOpen: state.header.isNavOpen,
		isSearchOpen: state.header.isSearchOpen,
	};
};

const mapDispatchToProps = dispatch => ({
	requestNavOpen: () => dispatch({ type: 'NAV_OPEN' }),
	requestNavClose: () => dispatch({ type: 'NAV_CLOSE' }),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderContainer);