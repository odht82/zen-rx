import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './DoctorCard.css';

const DoctorCard = (props) => {
    const { name, img, special, review } = props.doctor
    return (
        <div>
            <Card>
                <CardBody>
                    <div className="image-container">
                        <CardImg top style={{
                            objectFit: 'cover',
                            borderRadius: '12px 12px 0px 0px'
                        }} width="100%" src={img} alt="Card image" />
                    </div>
                    <div className="name-special">
                        <CardTitle className='name' tag="h2">{name}</CardTitle>
                        <CardSubtitle tag="h4" className="mb-2 text-muted">{special}</CardSubtitle>
                        <CardText tag="h4" style={{ color: '#06C7F2', display: 'flex', alignItems: 'center', marginTop: '10px' }}>{review} <AiFillStar style={{ color: '#06C7F2', height: "18px", width: "18px", alignContent: 'center', marginLeft: '5px' }} /></CardText>
                    </div>
                    <div className="button">
                        <Button className='contact-btn'>Contact</Button>
                    </div>
                </CardBody>
            </Card>
        </div >
    );
};

export default DoctorCard;