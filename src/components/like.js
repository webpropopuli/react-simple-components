import React from 'react';

const LikeIcon = () => {
  return (
    <div style={{display: 'inline'}}>
      <span className="fa-stack fa-sm">
        <i className="fa fa-circle fa-stack-2x blue-icon" />
        <i className="fa fa-thumbs-up fa-stack-1x fa-inverse" />
      </span>
    </div>
    )
  }

  export default class Like extends React.Component {
    constructor() { 
      super() 
      this.state = { liked: false } 
     } 

    toggleLike = () => { 
      this.setState(prevState => ({ 
        liked: !prevState.liked
      }))
     } 

    render() {
      let thumb = 'fa fa-thumbs-o-up fa-3 align-middle'
      return (
        <div>
          {/* Include the LikeIcon subcomponent within the Like component*/}
          <span>
            <button type="button" onClick={this.toggleLike}>
              {(() => {
                if(this.state.liked) { 
                  //btnText = 'Hate ' 
                  thumb = 'fa fa-thumbs-o-down fa-3 align-middle'
                }
              else {
                 //btnText = 'Like '
                 thumb = 'fa fa-thumbs-o-up fa-3 align-middle'
                 }
                })}
              {this.state.liked ? 'Hate ' : 'Like '}
              <i
                className={thumb}
                aria-hidden="true"
              />
            </button>
            {this.state.liked && <LikeIcon />}
          </span>
        </div>
      )
    }
  }