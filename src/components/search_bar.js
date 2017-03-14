import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }


  render() {
    console.log('render');
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
//          onChange={event => this.setState({term: event.target.value})}
          onChange={event => this.onKeyPressed(event.target.value)}
        />
      </div>
    );
  }

  onKeyPressed(term) {
    this.setState({term})
    this.props.searchForVideo(term)
  }

  onInputChange(event) {

    setState({
      term: event.target.value
    })
  };
}

export default SearchBar;