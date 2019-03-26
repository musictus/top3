import React, { Component } from "react";
import {Icon, Button} from 'react-materialize'

// By extending the React.Component class, VoteCounter inherits functionality from it
class VoteCounter extends Component {
  // Setting the initial state of the VoteCounter component
  state = {
    count: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  
  // The render method returns the JSX that should be rendered
  render() {

    const counterStyle = {
        width: '190px',
        backgroundColor: '#ff7043',
        marginRight: '10px',
        marginTop: '37px'
    }
    const textStyle = {
        fontFamily: 'Quicksand',
        fontSize: '15px'
    }

    return (

        <div>
          <Button
            onClick={this.handleIncrement}
            node="a"
            waves="light"
            small
            style={counterStyle}
            >
            Vote: {this.state.count}
            <Icon left>
            thumb_up
            </Icon>
          </Button>

            {/* <Button
              type="submit" 
              waves="light" 
              onClick={this.handleIncrement} 
              style={counterStyle} 
              icon="add thumb_up"
            >
            </Button>
            <div style={textStyle}>Counter {this.state.count}</div> */}
        </div>



    );
  }
}

export default VoteCounter;
