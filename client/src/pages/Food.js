import React, { Component } from "react";
import {Row, Col} from "react-materialize"
import API from "../utils/API";
import SideNavigator from "../components/SideNavigator";
import FoodCard from "../components/FoodCard";

class Food extends Component {
  
  state = {
    food: ""
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    // API.getFoods(this.props.match.params.id)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <Row>
        <Col s={1}></Col>
          <SideNavigator s={1}></SideNavigator>
          <FoodCard s={7} actions={[<a href='#'>{this.state.food.name}</a>]}>{this.state.food.name}</FoodCard>
        <Col s={3}></Col>
      </Row>
    );
  }
}

export default Food;