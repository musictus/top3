import React, { Component } from "react";
import {Row, Col} from "react-materialize"
import API from "../utils/API";
import SideNavigator from "../components/SideNavigator";
import FoodCard from "../components/FoodCard";
import FooterBottom from "../components/FooterBottom";

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

    let savedValue = sessionStorage.getItem("food_name");

    console.log("TEST: " + savedValue)

    return (
      <Row>
        <SideNavigator></SideNavigator>
        <h1>{savedValue}</h1>
        {/* <FoodCard s={7} actions={[<a href='#'>{this.state.food.name}</a>]}>{this.state.food.name}</FoodCard> */}
        <FooterBottom></FooterBottom>
      </Row>
    );
  }
}

export default Food;