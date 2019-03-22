import React, { Component } from "react";
import {Row, Col} from "react-materialize"
import Search from "../components/Search"
import API from "../utils/API";

class Search_page extends Component {

  state = {
    search: "",
    results: [],
    food: "",
    autoComplete: {}
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
      console.log(apiResults)
      apiResults.map( object => {
        let foodName = object.food_name.toString()
        searchState = {};
        searchState[foodName] = null;
        // console.log(searchState)
      })
      return this.setState({ autoComplete: searchState })
    })
    // iterate over the data, map func, forEach, create new object, object.assign, nameOfObject[Google]
    .catch(err => console.log(err));
  }

  searchFood = () => {
    return this.state.autoComplete
  };

  render() {

  return (

    <Row>
      <Col s={5} className='search-page-logo'></Col>
        <h1 s={2}>Top3</h1>
      <Col s={5} className='search-page-logo'></Col>

      <br></br>
      <Col s={5} className='search-page'></Col>
        <Search
          searchFood={this.searchFood}
        />
      <Col s={5} className='search-page'></Col>
    </Row>
    
    );
}

}

export default Search_page;