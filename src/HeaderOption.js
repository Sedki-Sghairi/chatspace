import React from 'react';
import './headerOption.css';

const HeaderOption = ({ Icon, title, myStyle }) => {
	return (
		<>
			{Icon && (
				<a href="/" className={(myStyle ? myStyle : '') + ' headerOption'}>
					<Icon />
					<h6>{title}</h6>
				</a>
			)}
		</>
	);
};

export default HeaderOption;
