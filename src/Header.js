import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import GroupIcon from '@material-ui/icons/Group';
import EmailIcon from '@material-ui/icons/Email';
// import AddBoxIcon from '@material-ui/icons/AddBox';
import WorkIcon from '@material-ui/icons/Work';
import Home from '@material-ui/icons/Home';
const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<a href="/">
					<img src="/images/logo.svg" alt="logo" />
				</a>
				<div className="header__search">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption title="chat" Icon={EmailIcon} />
				<HeaderOption title="community" Icon={GroupIcon} />
				<HeaderOption title="jobs" Icon={WorkIcon} />
				<HeaderOption title="home" Icon={Home} myStyle="home" />
				<HeaderOption avatar="/images/avatar.png" myStyle="profile" />
			</div>
		</div>
	);
};

export default Header;
