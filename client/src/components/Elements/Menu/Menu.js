import React, { Component } from "react";
import { Link } 						from "react-router-dom";
import 													 "./Menu.css";

const options = [
	{ route: "/signin/summary", 	name: "Summary" },
	{ route: "/signin/whistory", 	name: "Work History" },
	{ route: "/signin/education",	name: "Education"},
	{ route: "/signin/awards",		name: "Awards" },
	{ route: "/signin/skills", 		name: "Skills" },
	{ route: "/signin/certs",			name: "Certifications" }
];

class Menu extends Component {
	render() {
		return (
			<div className="side-menu align-items-start">
				{options.map((option,index) => (
					<Link key={ index }to={ option.route } 
					className={ window.location.pathname === option.route ? "menu-option active-bar" : "menu-option" }>
						<span>{ option.name }</span>
					</Link>
				))}
				<div className=
				{ window.location.pathname === "/signin/goals" || window.location.pathname === "/signin/newgoal"
					? "menu-option dropdown active-bar"
					: "menu-option dropdown" }>
					<span>Goals &amp; Objectives</span>
					<div className="dropdown-content" >
						<Link to="/signin/goals" 
						className={ window.location.pathname === "/signin/goals"
							? "menu-option menu-suboption dropdown active-bar"
							: "menu-option menu-suboption dropdown" }>See Current Goals
						</Link>
						<Link to="/signin/newgoal" 
						className={ window.location.pathname === "/signin/newgoal"
							? "menu-option menu-suboption dropdown active-bar"
							: "menu-option menu-suboption dropdown" }>Create New Goal
						</Link>
					</div>
				</div>
			</div>
		);
	};
};

export default Menu;