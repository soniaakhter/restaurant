import React from 'react';
import { Card, CardTitle, CardBody, CardImg, CardImgOverlay } from 'reactstrap';


const MenuItem = (props) => {
    console.log(props);
    return (
        <div>
            <Card style={{margin:"10px"}}>
                <CardBody>
                    <CardImg 
                    width="100%" 
                    alt={props.dish.name} 
                    src={props.dish.image}
                    style={
                        {opacity: "0.6"}
                    }
                     />
                    <CardImgOverlay>
                        <CardTitle>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}



export default MenuItem;