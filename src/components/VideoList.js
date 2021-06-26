import React from 'react';
import VideoItem from './VideoItem';

// const VideoList = props => {
//     return (
//         <div>{props.videos.length}</div>
//     )
// }

const VideoList = ({ videos , onVideoSelect }) => {
    // return <div>{videos.length}</div>
    const renderedList = videos.map((video)=>{
        return <VideoItem
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
                video={video}
            />;
    })
    return <div   className="ui relaxed divided list">{ renderedList }</div> //return all videos
   
}

export default VideoList;