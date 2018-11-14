import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateClick = () => {
    this.setState({
      settings: {}
    })
  }

  render() {
    return(
      <button class='bitrate' onClick={this.bitrateClick}>Bitrate</button>
      <button class='resolution' onClick={this.resolutionClick}>Resolution</button>
    )
  }
}
export default YouTubeDebugger