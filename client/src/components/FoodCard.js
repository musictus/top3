import React from "react";
import {Row, Col, Card, CardTitle} from 'react-materialize'
import { PromiseProvider } from "mongoose";
import VoteCounter from "../components/VoteCounter";


function FoodCard(props) {
  
  const fontStyle = {
    fontFamily: 'Fredericka the Great'
  }
  const h3Style = {
    fontFamily: 'Shadows Into Light',
    marginLeft: '33px',
    marginTop: '37px'
  }


  return (

    <Row>
      <Col m={1} s={0}></Col>
      <Col m={10} s={12}>

        <Card key={props.key} horizontal header={<CardTitle image=""></CardTitle>} actions={[<a href={props.yelpLink}>Restaurant Details</a>]}>
            <Row>
              <Col m={1}>
                <h1 style={fontStyle}>1{props.vote_ranking}</h1>
              </Col>
              <Col m={9}>
                <h3 style={h3Style}>Restaurant Name:{props.restaurant_name}</h3>
              </Col>
              <Col m={1}>
              <VoteCounter></VoteCounter>
              </Col>
            </Row>
        </Card>

      <Col m={1} s={0}></Col>
      </Col>
    </Row>

  )

}

export default FoodCard;




{/* <Col m={7} s={12}>
  <Card horizontal header={<CardTitle image="./img/card-horizontal.jpeg"></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
      {children}
  </Card>
</Col> */}