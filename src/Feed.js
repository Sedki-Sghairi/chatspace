import React from 'react';
import './feed.css';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import InputOptions from './InputOptions';

const Feed = () => {
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateOutlinedIcon />
					<form>
						<input type="text" />
						<button type="submit">Post</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOptions />
				</div>
			</div>
		</div>
	);
};

export default Feed;
