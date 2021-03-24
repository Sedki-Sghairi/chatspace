import React from 'react';
import './feed.css';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import InputOptions from './InputOptions';
import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import DescriptionIcon from '@material-ui/icons/Description';
import Post from './Post';
import { useState } from 'react';
import { db } from './firebase';
import { useEffect } from 'react';
import firebase from 'firebase';

const Feed = () => {
	const [ posts, setPosts ] = useState([]);
	const [ input, setInput ] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		db.collection('posts').add({
			name: 'sedki',
			description: 'testing this',
			message: input,
			photoUrl: '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		});
		setInput('');
	};
	useEffect(() => {
		db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshat) => {
			setPosts(
				snapshat.docs.map((doc) => ({
					id: doc.id,
					data: doc.data()
				}))
			);
		});
		return () => {
			//
		};
	}, []);
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateOutlinedIcon />
					<form>
						<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
						<button type="submit" onClick={handleSubmit}>
							Post
						</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOptions Icon={PhotoIcon} title="Photo" color="rgba(52, 88, 129,.5)" />
					<InputOptions Icon={VideocamIcon} title="Video" color="#a5d6a7" />
					<InputOptions Icon={EventAvailableIcon} title="Event" color="#ffcc80" />
					<InputOptions Icon={DescriptionIcon} title="Article" color="#81d4fa" />
				</div>
			</div>
			{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
				<Post key={id} name={name} message={message} description={description} photoUrl={photoUrl} />
			))}
			<Post name="sedki" description="some text here" photoUrl="/images/avatar.png" />
		</div>
	);
};

export default Feed;
