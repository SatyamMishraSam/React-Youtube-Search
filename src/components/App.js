import React from 'react';
import SearchBar from './SearchBar';
import utube from '../apis/utube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = {
        videos: [], selectedVideo: null
    };

    onTermSubmit = async term => {
        // console.log(term);
        const response =  await utube.get('/search', {
            params: {
                q: term
            }
            
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        }); // after requesting the data state will be changed
    };

    onVideoSelect = video => {
        // console.log(video);
        this.setState({ selectedVideo: video });
        
    }

    render() {
        return (
            <div style={{border:'3px solid red'}} className="ui container ">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                {/* I have {this.state.videos.length} videos. */}
                
                <div   className="ui grid">
                    <div  className="ui row">
                        <div  className="eleven wide column">
                        <VideoDetail video={ this.state.selectedVideo}/>
                        </div>

                        <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}               
export default App;