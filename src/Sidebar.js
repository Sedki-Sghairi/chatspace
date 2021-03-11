import { Avatar } from '@material-ui/core';
import React from 'react';
import './sidebar.css';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
const Sidebar = () => {
	const recentItem = (topic) => {
		return (
			<a className="sidebar__recentItem">
				<TimelineOutlinedIcon />
				<p className="topic">{topic}</p>
			</a>
		);
	};
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
				<b>#recent</b>
				{recentItem('Engineering')}
				{recentItem('Python')}
				{recentItem('JavaScript')}
				{recentItem('AngularJs')}
				{recentItem('ReactJs')}
			</div>
		</div>
	);
};

export default Sidebar;
