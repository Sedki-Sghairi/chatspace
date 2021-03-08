import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<img src="/images/logo.svg" alt="" />
				<div className="header__search">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div className="header__right" />
		</div>
	);
};

export default Header;
