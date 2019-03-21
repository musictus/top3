import React, { Component } from "react";
import {Row, Col} from "react-materialize"
import Search from "../components/Search"
import API from "../utils/API";

class Search_page extends Component {

  state = {
    food: ""
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
    API.getFoods(this.props.match.params.id)
    .then(res => {console.log(res.data); return this.setState({ food: res.data })})
    .catch(err => console.log(err));
  }


  render() {

  return (

    <Row>
      <Col s={5} className='search-page-logo'></Col>
        <h1 s={2}>Top3</h1>
      <Col s={5} className='search-page-logo'></Col>

      <br></br>
      <Col s={5} className='search-page'></Col>
        <Search></Search>
      <Col s={5} className='search-page'></Col>
    </Row>
    
    );
}

}

export default Search_page;