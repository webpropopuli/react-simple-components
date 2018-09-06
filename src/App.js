import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './components/comment';
import Like from './components/like'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Status extends React.Component {
  render() {
    return (
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-10 profile-row">
                <div className="row">
                  <a href="#">My ToDo++ app</a>
                </div>
                <div class="row">
                  <small className="post-time">10 mins</small>
                </div>
              </div>
            </div>
            <Like />
          </div>
          <p>Hello world!</p>
          <div className="card-footer text-muted" />
            <Comment />
        </div>
      </div>
    )
  }
}

export default Status;
