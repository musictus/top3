import React, { Component } from "react";
import {Row, Input, Button, Icon} from 'react-materialize'
// import API from "../utils/API";
require('dotenv').config()

const yelp = require('yelp-fusion');
const apiKey = process.env.YKEY;


class SearchYelp extends Component {

    state = {
        yelpSearchValue: "",
        yelpResults: [],
      };
    


        loadYelpData = () => {

            const searchRequest = {
            term: this.yelpSearchValue,
            location: 'new york, ny',
            limit: 5
            };

            const client = yelp.client(apiKey);

            client.search(searchRequest).then(response => {
                // const firstResult = response.jsonBody.businesses[0];
                // const prettyJson = JSON.stringify(firstResult, null, 4);
                // console.log(prettyJson);
                const allResult = response.jsonBody.businesses;
                const prettyJson = JSON.stringify(allResult, null, 4);
                console.log("json", prettyJson);
                this.setState({
                    yelpResults: prettyJson
                })
            }).catch(e => {
                console.log(e);
            });
      }

        handleInputChange() {
            console.log("props", this.props)
            this.setState({
                yelpSearchValue: this.props.yelpValue
            })
            this.loadYelpData();
        }

        displayResults() {
            console.log("YRESTULTS", this.state.yelpResults)
        }

      render () {
         
        return (
        
          <Row>
            <Input s={12} icon="restaurant" label="Search" value={this.props.yelpValue}>
            </Input>
            <Button type="submit" waves="light" onClick={this.handleInputChange}>
                Search
                <Icon right>
                search
                </Icon>
            </Button>
          </Row>
        );
      }

}

export default SearchYelp;