import React, { Component } from 'react';

class LikeIcon extends React.Component {
    render() {
      return (
        <div>
          <span className="fa-stack fa-sm">
            <i className="fa fa-circle fa-stack-2x blue-icon" />
            <i className="fa fa-thumbs-up fa-stack-1x fa-inverse" />
          </span>
        </div>
      )
    }
  }
  
  export default class Like extends React.Component {
    render() {
      return (
        <div>
          {/* Include the LikeIcon subcomponent within the Like component*/}
          <LikeIcon />
          <hr />
          <div>
            <button type="button">
              <i
                className="fa fa-thumbs-o-up fa-4 align-middle"
                aria-hidden="true"
              />
              &nbsp;
              <span className="align-middle">Like</span>
            </button>
          </div>
        </div>
      )
    }
  }