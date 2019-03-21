import React from "react";
import {Col, Card, CardTitle} from 'react-materialize'


function FoodCard({children}) {
   
  return (

    <Col m={7} s={12}>
      <Card horizontal header={<CardTitle></CardTitle>}>
          {children}
      </Card>
    </Col>

  )

}

export default FoodCard;




{/* <Col m={7} s={12}>
  <Card horizontal header={<CardTitle image="./img/card-horizontal.jpeg"></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
      {children}
  </Card>
</Col> */}