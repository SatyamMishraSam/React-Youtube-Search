import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div style={{border:'3px solid red'}}  onClick={()=>onVideoSelect(video)} className="video-item item">
            <img  alt={video.snippet.title} className="ui image"  src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div> //video title
);
}
export default VideoItem;