import React from 'react';

// const VideoListItem = (props) => {
// const video = props.video;
const VideoListItem = ({video, onVideoSelect}) => { // Same as 2 lines above
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list medea">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
    );
};

export default VideoListItem;