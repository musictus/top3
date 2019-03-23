import React, { Component } from "react";
import {Row, Col} from "react-materialize"
import Search from "../components/Search"
import API from "../utils/API";

class Search_page extends Component {

  state = {
    search: "",
    results: [],
    food: "",
    autoCompleteData: {}
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  componentDidMount() {
    this.loadFood();
  }

  loadFood = () => {
    let searchState = {};
    API.getFoods(this.props.match.params.id)
    .then(res => {
      const apiResults = res.data;
      apiResults.map( object => {
        let foodName = object.food_name.toString()
        searchState[foodName] = null;
        // console.log(searchState)
      })
      return this.setState({ autoCompleteData: searchState })
    })
    // iterate over the data, map func, forEach, create new object, object.assign, nameOfObject[Google]
    .catch(err => console.log(err));
  }


  render() {
    // console.log("TEST" , this.state.autoCompleteData)

    return (

      <Row>
        <Col s={5} className='search-page-logo'></Col>
          <h1 s={2}>Top3</h1>
        <Col s={5} className='search-page-logo'></Col>

        <br></br>
        <Col s={5} className='search-page'></Col>
          <Search
            searchFood={this.state.autoCompleteData}
          />
        <Col s={5} className='search-page'></Col>
      </Row>
      
      );
  }

}

export default Search_page;