import React, { Component } from "react";
import {Row, Col} from "react-materialize"
import API from "../utils/API";
import SideNavigator from "../components/SideNavigator";
import FoodCard from "../components/FoodCard";
import FooterBottom from "../components/FooterBottom";

const savedValue = sessionStorage.getItem("food_name");
const savedValueShort = sessionStorage.getItem("food_name_short");

class Food extends Component {

  state = {
    food: {},
    value_short: ""
  };
  
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    // this.loadFoods();
    this.loadFoodByName();
  }

  loadFoods = () => {
    API.getFoods(this.props.match.params.food_name_short)
      .then(res => this.setState({ food: res.data }))
      .catch(err => console.log(err));
  }

  loadFoodByName = () => {
      let shortValue;

    API.getFoodByName(this.props.match.params.food_name_short)
      .then(res => {
        let apiResults = res.data;
        console.log(apiResults)
        for (let i = 0; 0 < apiResults.length; i++) {
          if (apiResults[i].food_name_short === this.props.match.params.food_name_short) {
            shortValue = apiResults[i].food_name_short;
          }
          return this.setState({ value_short: shortValue })
        }
      })
      .catch(err => console.log(err));
  }

//   load = () => {
//     let shortValue;
//   API.getFoodByName(this.props.match.params.food_name_short)
//     .then(res => {
//       let apiResults = res.data;
//       console.log(res.data)
//       for (let i = 0; 0 < apiResults.length; i++) {
//         if (apiResults[i].food_name_short === savedValueShort) {
//           shortValue = apiResults[i].food_name_short;
//         }
//         return this.setState({ value_short: shortValue })
//       }
//     })
//     .catch(err => console.log(err));
// }


  render() {
    console.log("param:", this.props.match.params.food_name_short)
    // console.log("VLUEEEE:", this.state.food)

    const h1Style = {
      fontFamily: 'Fredericka the Great',
      right: 'auto',
      bottom: 'auto',
      marginLeft: '20%',
      marginTop: '30%'
    }

    // console.log("TEST: " + savedValue)

    return (
       <div>
            <Row>
              <Col s={2} className='grid-example'>
                <SideNavigator></SideNavigator>
              </Col>
              <Col s={1} className='grid-example'>
                <h1 style={h1Style}>{this.props.match.params.food_name_short}</h1>
              </Col>
            </Row>
            <Row>
              <FoodCard></FoodCard>
            </Row>
            <FooterBottom></FooterBottom>
        </div>
    );
  }
}

export default Food;