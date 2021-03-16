import { Avatar } from '@material-ui/core';
import React from 'react';
import InputOptions from './InputOptions';
import './post.css';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import TextsmsIcon from '@material-ui/icons/Textsms';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

const Post = ({ name, description, message, photoUrl }) => {
	return (
		<div className="post">
			<div className="post__header">
				<Avatar src={photoUrl} />
				<div className="post__info">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>
			<div className="post__body">
				<p>{message}</p>
			</div>
			<div className="post__buttons">
				<InputOptions Icon={ThumbUpAltIcon} title="Like" color="#90a4ae" />
				<InputOptions Icon={TextsmsIcon} title="Comment" color="#90a4ae" />
				<InputOptions Icon={ShareIcon} title="Share" color="#90a4ae" />
				<InputOptions Icon={SendIcon} title="Send" color="#90a4ae" />
			</div>
		</div>
	);
};

export default Post;
