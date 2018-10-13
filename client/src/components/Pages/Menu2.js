import React, {Component} from 'react';
import './Menu2.css'

class Menu extends Component {
	render() {
		return (
			<div className="side-menu align-items-start">
				<div className="menu-option"><span>Summary</span></div>
				<div className="menu-option"><span>Work History</span></div>
				<div className="menu-option active-bar"><span>Education</span></div>
				<div className="menu-option"><span>Awards</span></div>
				<div className="menu-option"><span>Skills</span></div>
				<div className="menu-option"><span>Certifications</span></div>
			</div>
		);
	}
};

export default Menu;