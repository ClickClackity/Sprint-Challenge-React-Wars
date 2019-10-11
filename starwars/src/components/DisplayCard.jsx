import React from "react";
import { Card, Button, CardTitle, CardText, CardBody } from "reactstrap";
import "../App";


const DisplayCard = (props) => {
  return (
      <Card>
        <CardBody>
          <CardTitle>{props.person.name}</CardTitle>
          <CardText>Mass: {props.person.mass}</CardText>
          <CardText>Gender: {props.person.gender}</CardText>
          <CardText>Hair Color: {props.person.hair_color}</CardText>
          <Button href="#" target="_blank">Next Character!</Button>
        </CardBody>
        </Card>
  );
};


export default DisplayCard;