import React from 'react';

class DigitalClicker extends React.Component{

  render() {
    return(
      <button onClick={this.handleClick}>{this.state.timesClickec}</button>
    )
  }
}