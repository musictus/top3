import React, { Component } from "react";
import {Row, Col, Button} from "react-materialize"
import API from "../utils/API";
import SideNavigator from "../components/SideNavigator";
import FoodCard from "../components/FoodCard";
import FooterBottom from "../components/FooterBottom";
import SearchOnPage from "../components/SearchOnPage";
import ModalForm from "../components/ModalForm";

// const savedValue = sessionStorage.getItem("food_name");
// const savedValueShort = sessionStorage.getItem("food_name_short");

class Food extends Component {

  state = {
    restaurants: [],
    food: "",
    food_short: ""
    // value_short: ""
  };

  // trigger = React.createRef();
  
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.getRestaurants();
    // console.log("modaltrigger", this.triggerModal.current)
  }

  modalTrigger = () => {
    return <Button></Button>
  }

  // loadFoods = () => {
  //   API.getFoods(this.props.match.params.food_name_short)
  //     .then(res => this.setState({ food: res.data }))
  //     .catch(err => console.log(err));
  // }

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
    // console.log("E", e)
    // console.log("etarget", e.target.dataset.votes)
    // console.log("etargetyelpid", e.target.dataset.yelpid)
    // console.log("erestaurant", this.state.restaurants)
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
  

  render() {
    // console.log("param:", this.props.match.params.food_name_short)
    console.log("TEST Array:", this.state.restaurants)
    console.log("FOOD", this.state.food)
    // console.log("VLUEEEE:", this.state.food)

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