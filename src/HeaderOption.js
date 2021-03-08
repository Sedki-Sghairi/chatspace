import React from 'react';
import './headerOption.css';

const HeaderOption = ({ Icon, title, myStyle }) => {
	return (
		<div className="headerOption">
			{myStyle ? (
				Icon && (
					<div className={myStyle}>
						<Icon />
					</div>
				)
			) : (
				Icon && <Icon />
			)}
			<h6>{title}</h6>
		</div>
	);
};

export default HeaderOption;
