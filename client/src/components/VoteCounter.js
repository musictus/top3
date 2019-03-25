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
        width: '120px',
        backgroundColor: 'red',
        marginRight: '10px',
        marginTop: '37px'
    }
    const textStyle = {

    }

    return (

        <div>
            <Button type="submit" waves="light" onClick={this.handleIncrement} style={counterStyle}>
            <div className="click-count">Vote: {this.state.count}</div>
            <Icon>add_cirlcle thumb_up"</Icon>
            </Button>
        </div>

    );
  }
}

export default VoteCounter;
