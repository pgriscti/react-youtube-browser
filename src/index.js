import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_Key = 'AIzaSyAx-JH5gMQ5cLN0JPtuhRpgBcNbD13pgt4';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchForVideo('tile');
  }

  searchForVideo(term) {
    YTSearch({key: API_Key, term: term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  // figure out why the this keyword is undefined
//  onVideoSelect(selectedVideo) {
//    console.log('called onVideoSelect ', selectedVideo);
//    this.setState({
//      selectedVideo: selectedVideo
//    })
//  }

  render() {
    // debounce - lets you only call the function every 300 ms
    const videoSearch = _.debounce((term) => {this.searchForVideo(term)}, 300);

    return (
      <div>
        <SearchBar searchForVideo={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
