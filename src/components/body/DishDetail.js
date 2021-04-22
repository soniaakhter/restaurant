import React from 'react';
import { Card, CardTitle, CardBody, CardImg, CardText } from 'reactstrap';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} ></CardImg>
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p><b>Price:</b> {props.dish.price}/-</p>
                        <p><b>Label:</b> {props.dish.label}</p>
                        <p><b>Category:</b> {props.dish.category}</p>
                         
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}


export default DishDetail;