import React, { Component } from 'react';

class Search extends Component {
  constructor() {
      super();
      this.state = { term: '' }
  }

  onInputChange(term) {
      this.setState({term});
      this.props.onTermChange(term);
  }

  render() {
      return (
          <div className="search">
              <input placeholder='Search your favorite GIPHY here!' style={{color: "black", borderWidth: "thin", borderColor: "black"}}
              onChange={event=> this.onInputChange(event.target.value)} />
          </div>
      );
  }
}

export default Search;
