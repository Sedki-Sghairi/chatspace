import React from 'react';
import './feed.css';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import InputOptions from './InputOptions';
import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import DescriptionIcon from '@material-ui/icons/Description';

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
					<InputOptions Icon={PhotoIcon} title="Photo" color="rgba(52, 88, 129,.5)" />
					<InputOptions Icon={VideocamIcon} title="Video" color="#a5d6a7" />
					<InputOptions Icon={EventAvailableIcon} title="Event" color="#ffcc80" />
					<InputOptions Icon={DescriptionIcon} title="Article" color="#81d4fa" />
				</div>
			</div>
		</div>
	);
};

export default Feed;
