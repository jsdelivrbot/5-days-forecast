import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  
  componentDidMount(){
  	document.body.style.backgroundColor = "#fffde7";
  }


  render() {
    return (
      <div>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
