import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <video width="320" height="240" controls>
                <source src="http://localhost:8080/video" type="video/mp4"/>
                    Your browser does not support the video tag.
            </video>
        </p>
      </div>
    );
  }
}

export default App;
