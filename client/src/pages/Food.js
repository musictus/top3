import React, { Component } from "react";
import {Row, Col, Button} from "react-materialize"
import API from "../utils/API";
import SideNavigator from "../components/SideNavigator";
import FoodCard from "../components/FoodCard";
import FooterBottom from "../components/FooterBottom";
import SearchOnPage from "../components/SearchOnPage";
import ModalForm from "../components/ModalForm";
import YELP from "../utils/YELP";

const savedValue = sessionStorage.getItem("food_name");
const savedValueShort = sessionStorage.getItem("food_name_short");

class Food extends Component {

  state = {
    restaurants: [],
    food: "",
    food_short: ""
    // value_short: ""
  };
  
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.getRestaurants();
  }

  getRestaurants = () => {
    API.getFoodByName(this.props.match.params.food_name_short)
      .then(res => {
        let restaurantArray = [];
        let apiResults = res.data;
        let restaurantResults = apiResults.restaurants;
        console.log("initial restaurants:", restaurantResults)
        // this loop goes through the restaurants array, grabs the editor picks, and sort them by
        restaurantResults.forEach( restaurants => {
          if (restaurants.editor_pick === true) {
            restaurantArray.push(restaurants);
            restaurantArray.sort((a, b) => {return b-a})
        }
          return this.setState({ 
            restaurants: restaurantArray,
            food: apiResults.food_name,
            food_short: apiResults.food_name_short
          })
        // console.log("TEST ARRAY:", restaurantArray)
        })
      }).catch(err => console.log(err));
    }
  
  getYelpRestaurants = () => {
    YELP.loadYelpData()
      .then(res => {

      })
  }

  updateVotesFunction = (yelpid) => {
    API.updateVote(this.state.food_short, yelpid)
      .then(res => {
        console.log("res", res)
        this.getRestaurants()
        // if (res.status === 200) {
        // window.location = `${this.state.food_short}`
        // }
      })
  }
  
  // handleIncrement increments this.state.count by 1
  handleIncrement = (e) => {
    let restaurantToUpdate = this.state.restaurants.map(data => { 
      if (e.target.dataset.yelpid === data.yelpid) {
        // restaurant.votes = parseInt(e.target.dataset.votes) + 1
        this.updateVotesFunction(data.yelpid)
      }
      return data
    })
    this.setState({
        restaurants: restaurantToUpdate
    })
    console.log("AFTER", this.state.restaurants)
  };
  

  modalTrigger = () => {
    const buttonStyle = {
      width: '300px',
      height: '50px',
      backgroundColor: '#ffb74d',
      margin: '10px'
    }
    return <Button style={buttonStyle}>Suggest Your Restaurant</Button>
  }


  render() {
    // console.log("param:", this.props.match.params.food_name_short)
    // console.log("VLUEEEE:", this.state.food)
    console.log("TEST Array:", this.state.restaurants)
    console.log("FOOD", this.state.food)

    const h1Style = {
      fontFamily: 'Fredericka the Great',
      right: 'auto',
      bottom: 'auto',
      marginLeft: '3%',
      marginTop: '5%'
    }
    const searchOnPageStyle = {
      right: 'auto',
      bottom: 'auto',
      marginLeft: '0%',
      marginTop: '7%'
    }


    return (

       <div>
            <Row>
              <Col m={2} s={12} className='grid-example'>
                <SideNavigator></SideNavigator>
              </Col>

              <Col m={6} s={5} className='grid-example'>
                <h1 style={h1Style}>{this.state.food}</h1>
              </Col>
              
              <Col m={4} s={7}>
                <div style={searchOnPageStyle}>
                <SearchOnPage></SearchOnPage>
                </div>
              </Col>
            </Row>

            <Row>
              {this.state.restaurants
                .sort(
                  (a, b) => {
                    return b.votes - a.votes;
                  }
                )
                .map((data, index) => (
                  <FoodCard
                    index={index}
                    yelpLink={data.yelplink}
                    yelpid={data.yelpid}
                    restaurant_name={data.restaurant_name}
                    votes={data.votes}
                    handleIncrement={this.handleIncrement}
                    />
                  )
                )}
            </Row>

            <ModalForm trigger={this.modalTrigger}></ModalForm>
            <FooterBottom></FooterBottom>
        </div>

    );
  }
}

export default Food;