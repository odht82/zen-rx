import React from 'react';
import { useParams } from 'react-router';

const Service = () => {
    const { key } = useParams()
    return (
        <div>
            <h1>This is: {key}</h1>
        </div>
    );
};

export default Service;