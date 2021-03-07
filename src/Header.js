import React from 'react';
import './header.css';
import { FaSearch } from 'react-icons/fa';
const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<img src="/images/logo.svg" alt="" />
				<div className="header__search">
					<FaSearch />
					<input type="text" />
				</div>
			</div>
			<div className="header__right" />
		</div>
	);
};

export default Header;
