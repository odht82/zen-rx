import React from 'react';
import { useParams } from 'react-router';
import './Details.css';

const Service = () => {
    const { detailsId } = useParams()
    return (
        <div>
            <h1>This is: {detailsId}</h1>
        </div>
    );
};

export default Service;