import { Avatar } from '@material-ui/core';
import React from 'react';
import './headerOption.css';

const HeaderOption = ({ Icon, title, myStyle,avatar }) => {
	return (
		<>
			{Icon && (
				<a href="/" className={(myStyle ? myStyle : '') + ' headerOption'}>
					<Icon />
					<h6>{title?title:''}</h6>
				</a>
			)}
                   <a href="#">
                     {avatar && <Avatar className={`${myStyle?myStyle:''}`} src={avatar}/>}
                   </a> 
            
		</>
	);
};

export default HeaderOption;
