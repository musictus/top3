import React from "react";
import {Row, Col, Card, CardTitle} from 'react-materialize'
import VoteCounter from "../components/VoteCounter";
// import { PromiseProvider } from "mongoose";

function FoodCard(props) {
  
  const fontStyle = {
    fontFamily: 'Fredericka the Great'
  }
  const h3Style = {
    fontFamily: 'Quicksand',
    marginLeft: '33px',
    marginTop: '37px'
  }
  const aStyle = {
    fontFamily: 'Quicksand'
  }

  console.log("propsinCard", props.votes)
  return (

    <Row>
      <Col m={1} s={0}></Col>
      <Col m={10} s={12}>

        <Card key={props.key} horizontal header={<CardTitle image=""></CardTitle>} actions={[<a style={aStyle} href={props.yelpLink} target="_blank">Restaurant Details</a>]}>
            <Row>
              <Col m={1} s={1}>
                <h1 style={fontStyle}>{props.index + 1}</h1>
              </Col>
              <Col m={8} s={11}>
                <h3 style={h3Style}>{props.restaurant_name}</h3>
              </Col>
              <Col m={2} s={12}>
                <VoteCounter
                votes={props.votes}
                yelpid={props.yelpid}
                handleIncrement={props.handleIncrement}
                >
                </VoteCounter>
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