import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

class NavMenu extends Component {
    static propTypes = {
        menuVisibility: PropTypes.bool.isRequired,
        toggleNavMenu: PropTypes.func.isRequired,
    }

    render() {
        const { menuVisibility, toggleNavMenu } = this.props;
        var visibility = "hide";
    
        if (menuVisibility) {
            visibility = "show";
        }
    
        return (
            <div>
                <div id="flyoutMenu"
                    className={visibility}>
                    <button onClick={toggleNavMenu}>CLOSE</button>
                    <br />
                    <br />
                    <h2><Link to='/' onClick={toggleNavMenu}>Home</Link></h2>
                    <h2><Link to='/about' onClick={toggleNavMenu}>About</Link></h2>
                    {/* <h2><Link to='/kanji' onClick={toggleNavMenu}>Kanji</Link></h2> */}
                </div>
                <div id="hiddenMenu"
                     className={visibility}
                     onClick={toggleNavMenu}>aSa</div>
            </div>
        );
    }
}
 
 export default NavMenu;