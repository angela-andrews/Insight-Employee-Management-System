import React, {Component} from 'react';
import SideMenu from 'react-sidemenu';
import './Menu.css'
import items from '../../../data/items'

class Menu extends Component {
	render() {
		return (
			<div>
				<SideMenu
				items={items}
				reverse={false}
				onMenuItemClick={(value, extras) => window.location.href = "/signin/" + value}
				/>
			</div>
		);
	}
};

export default Menu;