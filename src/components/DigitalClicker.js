import React from 'react';

class DigitalClicker extends React.Component{

  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState(prevState =>({
      timesClicked: prevState.timesClicked + 1
    })
  )
  }

  render() {
    return(
      <button onClick={this.handleClick}>{this.state.timesClickec}</button>
    )
  }
}
