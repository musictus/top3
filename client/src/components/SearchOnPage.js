import React, { Component } from "react";
import {Row, Autocomplete} from 'react-materialize'
import API from "../utils/API";

class SearchOnPage extends Component {

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
        API.getFoods()
        .then(res => {
          const apiResults = res.data;
          apiResults.map( object => {
            let foodName = object.food_name.toString()
            searchState[foodName] = null;
            // console.log(searchState)
          })
          return this.setState({ autoCompleteData: searchState })
        })
        .catch(err => console.log(err));
      }

      render () {
         
        return (
        
          <Row>
            <Autocomplete
              s={3}
              title='Search'
              data={
                this.state.autoCompleteData
              }
              value={this.props.value}
              onAutocomplete={(value) => { 
                let newValue = value.replace(/\s/g, '').toLowerCase()
                window.location = `/${newValue}`
                let sessionValue = value
                let sessionValueShort = newValue
                // sessionStorage.clear();
                sessionStorage.setItem("food_name", sessionValue);
                sessionStorage.setItem("food_name_short", sessionValueShort);
                // window.location = `/food`
                // look into props.history.push
              }}
            >
            </Autocomplete>
          </Row>
        );
      }

}

export default SearchOnPage;