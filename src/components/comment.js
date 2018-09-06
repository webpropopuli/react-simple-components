import React, { Component } from 'react';

class Comment extends React.Component { 
    render() { 
      return ( 
        <div>
           <textarea className="form-control" placeholder="Write a comment..." /> 
           <small>140 Remaining</small> 
        </div> 
        ) 
     } 
  }

 export default Comment;