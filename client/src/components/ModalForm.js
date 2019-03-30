import React, { Component } from "react";
import {Button, Modal, Row, Col, Input, Icon, Autocomplete} from 'react-materialize'
import API from "../utils/API";
import SearchYelp from "../components/SearchYelp";
import SearchOnPage from "../components/SearchOnPage";

class ModalForm extends Component {

    state = {
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
          })
          return this.setState({ autoCompleteData: searchState })
        })
        .catch(err => console.log(err));
      }

    getValues = () => {
        this.setState({})
    }


    render() {

        const margin = {
            marginBottom: '1000px'
        }
          
        const buttonStyle = {
            width: '200px',
            height: '40px',
            backgroundColor: '#ffb74d',
            // marginRight: '10px',
            margin: '20px'
          }
        // console.log("TTTT", this.props.trigger)

        return (
            <Row>
                <Col s={3}></Col>
                <Col s={6} className="center-align" >
                <Modal header="Suggest Your Restaurant!" trigger={this.props.trigger()}>
            
                    <Row>
                        
                        <Autocomplete
                            s={12}
                            // icon="fastfood"
                            title='Search Food'
                            data={
                                this.state.autoCompleteData
                            }
                            value={this.props.value}
                            onAutocomplete={(value) => { 
                                let newValue = value.replace(/\s/g, '').toLowerCase()
                                let modalSessionValue = value
                                let modalSessionValueShort = newValue
                                sessionStorage.setItem("food_name", modalSessionValue);
                                sessionStorage.setItem("food_name_short", modalSessionValueShort);
                            }}
                            >
                        </Autocomplete>

                        <Input
                            s={12}
                            // icon="business"
                            label="Search Restaurant"
                            value={this.props.yelpValue}
                            >
                        </Input>

                        <Button
                            type="submit" 
                            waves="light" 
                            style={buttonStyle} 
                            onClick={this.handleInputChange}
                        >
                            Search
                            <Icon left>search</Icon>
                        </Button>

                    </Row>
                </Modal>
                </Col>
                <Col s={3}></Col>
            </Row>

        )

    }

}

export default ModalForm;


{/* <Modal header="Suggest Your Restaurant!" trigger={<Button style={buttonStyle}>Suggest Your Restaurant</Button>}> */}