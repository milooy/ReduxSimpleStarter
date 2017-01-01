import React from 'react';

// const video = props.video; const onVideoSelect=props.onVideoSelect 이렇게 한 효과가 난다
const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<li onClick={()=> onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>
				<div className="media-body">
					<div className="Media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;
