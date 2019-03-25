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
    
    const h1Style = {
      fontFamily: 'Fredericka the Great',
      color: '#ff7043 deep-orange lighten-1',
      right: 'auto',
      bottom: 'auto',
      marginLeft: '20%',
      marginTop: '20%'
    }

    return (

      <Row>
        <Col s={5} className='search-page-logo'></Col>
          <h1 s={2} style={h1Style}>top3</h1>
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