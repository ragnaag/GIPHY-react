import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import GifList from './GifList';
import TrendingList from './TrendingList';
import Gif from './Gif';
import request from 'superagent';

import { BrowserRouter, Route, Link } from 'react-router-dom'


class App extends Component {
  constructor() {
    super();

    this.state = {
        gifs: [],
        trending:[]
    }

    this.handleTermChange = this.handleTermChange.bind(this);
    }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=3yzgPw8SRGSVovhRU5OkDPfKx4vOq5BY`;
    request.get(url, (err, res) => {
        this.setState({ gifs: res.body.data })
    });
 }

 trending(){
   request.get(`http://api.giphy.com/v1/gifs/trending?api_key=3yzgPw8SRGSVovhRU5OkDPfKx4vOq5BY`,
     (err, res) => {
       this.setState({ trending: res.body.data })
   });
 }

 componentDidMount(){
   this.trending()
 }

  render (){
    var date = new Date()
    var newDate = date.getDate();
    var month = date.getMonth() + 1;
    let year = date.getFullYear();
    return(
      <BrowserRouter>
      <div className="App">
        <header className="header">
          <h1>Welcome to GIPHY-generator! <span></span>
          <h2>Search and enjoy your favorite GIPHY's</h2></h1>
          <a href= 'https://developers.giphy.com/'
          style={{ textDecoration: 'none', color: 'black', padding:'10px'}}>
          Powered by GIPHY</a>
        </header>
        <hr/>
        <div className="gifGrid">
          <Search onTermChange={this.handleTermChange} />
          <GifList gifs={this.state.gifs} />
          <hr/>
          <div className="trending-container">
            Trending today - {newDate}/{month}/{year}
          <TrendingList gifs={this.state.trending}/>
          </div>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
