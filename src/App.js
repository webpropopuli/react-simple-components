import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Comment from './components/comment';
import Like from './components/like'


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
                <div className="row">
                  <small className="post-time">10 mins</small>
                </div>
              </div>
            </div>
            <Like />
          </div>
          <p>Hello world!</p>
          <div className="card-footer text-muted" />
            <Comment maxLetters={20} />
        </div>
      </div>
    )
  }
}

export default Status;
