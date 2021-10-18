import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './ProductCard.css';

const ProductCard = (props) => {
    const { name, price, review, img } = props.product;
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={img} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{price}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{name}</CardSubtitle>
                    <CardText>{review}</CardText>
                    <Button>Add to cart</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default ProductCard;