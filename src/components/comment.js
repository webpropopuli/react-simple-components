import React from 'react';



class Comment extends React.Component { 
  constructor () {
    super()
    this.state = { charsTypedIn: 0, charsRemaining : 0 }
  }
  componentWillMount() {
    this.setState({charsRemaining: this.props.maxLetters} )
  }
  handleChange = (event) => {
    const len = event.target.value.length
    if(len > this.props.maxLetters) {
      console.log(event)
      event.persist()
      event.preventDefault()
      event.stopPropagation()
      event=null

    }
    else {
    this.setState({charsRemaining: this.props.maxLetters - len} )
    this.setState({charsTypedIn: len} )
    }
  }

    render() { 
      return ( 
        <div>
           <textarea onChange={this.handleChange} className="form-control" placeholder="Your comment..." /> 
           <small>{this.state.charsRemaining} chars left</small> 
        </div> 
        ) 
     } 
  }

 export default Comment;