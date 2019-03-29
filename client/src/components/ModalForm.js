import React, { Component } from "react";
import {Button, Modal, Row, Col, Input, Icon} from 'react-materialize'
import SearchYelp from "../components/SearchYelp";
// import SearchOnPage from "../components/SearchOnPage";

class ModalForm extends Component {

    state = {
        count: 0
      };
    
    componentDidMount() {
        console.log("TEST PP", this.props)
    }

    render() {

        const buttonStyle = {
            width: '300px',
            backgroundColor: '#ff7043',
            // marginRight: '10px',
            margin: '10px'
        }
        console.log("TTTT", this.props.trigger)
        return (
            <Row>
                <Col s={3}></Col>
                <Col s={6} className="center-align">
                <Modal header="Suggest Your Restaurant!" trigger={this.props.trigger()}>
            
                    <Row>
                        <Input s={12} icon="fastfood" label="Food Name" />
                        <SearchYelp></SearchYelp>
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