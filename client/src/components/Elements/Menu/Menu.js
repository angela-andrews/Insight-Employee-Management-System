import React, {Component} from 'react';
import SideMenu from 'react-sidemenu';
import './Menu.css'

const items = [
	{label: 'Summary', value: 'summary', icon: '',
	children: [
		{label: 'Summary 1', value: 'summary1'},
		{label: 'Summary 2', value: 'summary2'},
	]},
	{label: 'Work History', value: 'wHistory', icon: '',
	children: [
		{label: 'Work History 1', value: 'summary1'},
		{label: 'Work History 2', value: 'summary2'},
	]},
	{label: 'Education', value: 'education', icon: '',
	children: [
		{label: 'Education 1', value: 'summary1'},
		{label: 'Education 2', value: 'summary2'},
	]},
	{label: 'Awards', value: 'awards', icon: '',
	children: [
		{label: 'Awards 1', value: 'summary1'},
		{label: 'Awards 2', value: 'summary2'},
	]},
	{label: 'Skills', value: 'skills', icon: '',
	children: [
		{label: 'Skills 1', value: 'summary1'},
		{label: 'Skills 2', value: 'summary2'},
	]},
	{label: 'Certifications', value: 'certs', icon: '',
	children: [
		{label: 'Certifications 1', value: 'summary1'},
		{label: 'Certifications 2', value: 'summary2'},
	]},
];
class Menu extends Component {
	render() {
		return (
			<div>
				<SideMenu
				items={items}
				reverse={false}
				/>
			</div>
		);
	}
};

export default Menu;