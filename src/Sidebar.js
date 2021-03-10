import { Avatar } from '@material-ui/core';
import React from 'react';
import './sidebar.css';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img src="/images/bg.webp" alt="background image" />
				<Avatar className="sidebar__avatar" />
				<h2>sedki shgairi</h2>
				<h4>Full stack web developper</h4>
			</div>
			<div className="sidebar__stats">
				<a className="sidebar__link">who viewed your profile</a>
				<a className="sidebar__link">Your posts</a>
			</div>
			<div className="sidebar__bottom">
				<p>recent</p>
			</div>
		</div>
	);
};

export default Sidebar;
