// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState({
    hasBeenClicked: true
  })
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
<<<<<<< HEAD
        <button onClick={this.handleClick.bind(this)}>Click me!</button>
=======
        <button onClick={this.handleClick}>Click me!</button>
>>>>>>> b5372f91f3433df5b630b57157993a49964e68d2
      </div>
    );
  }
}

export default ClickityClick;
