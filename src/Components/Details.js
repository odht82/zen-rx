import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import './Details.css';
import DetailsCard from './DetailsCard';

const Service = () => {
    const location = useLocation();
    let local = location.pathname.split('/')
    let prevPath = '/' + local[1];
    let homePrevPath = true;
    let pathPrefix = local[1];
    // console.log(prevPath);


    const { productId, serviceId, doctorId, homeServiceId } = useParams();
    const [products, setProducts] = useState({});
    const [services, setServices] = useState({});
    const [doctors, setDoctors] = useState({});
    const [homeServices, setHomeServices] = useState({});

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/odht82/fake-api-zen-rx/main/productData/${productId}.json`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [productId]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/odht82/fake-api-zen-rx/main/serviceData/${serviceId}.json`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [serviceId]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/odht82/fake-api-zen-rx/main/doctorData/${doctorId}.json`)
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [doctorId]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/odht82/fake-api-zen-rx/main/homeServiceData/${homeServiceId}.json`)
            .then(res => res.json())
            .then(data => setHomeServices(data));
    }, [homeServiceId]);
    return (
        <>
            {/* {
                pathPrefix ?
                    <h1>product: {products.name}</h1> :
                    <h1 style={{ display: 'none' }}>product: {products.name}</h1>
            } */}

            <div className="details">
                <div className="details-container">
                    <h2 className='details-section-heading'>
                        {pathPrefix}
                    </h2>
                    {productId &&
                        <div className="details-list-section">
                            {<DetailsCard
                                key={products.key}
                                details={products}
                                prevPath={prevPath}
                                review={true}
                                special={false}
                                price={true}
                            ></DetailsCard>}
                        </div>
                    }
                    {serviceId &&
                        <div className="details-list-section">
                            {<DetailsCard
                                key={services.key}
                                details={services}
                                prevPath={prevPath}
                                review={false}
                                special={true}
                                price={true}
                            ></DetailsCard>}
                        </div>
                    }
                    {doctorId &&
                        <div className="details-list-section">
                            {<DetailsCard
                                key={doctors.key}
                                details={doctors}
                                prevPath={prevPath}
                                review={true}
                                special={true}
                                price={false}
                            ></DetailsCard>}
                        </div>
                    }
                    {homeServiceId &&
                        <div className="details-list-section">
                            {<DetailsCard
                                key={homeServices.key}
                                details={homeServices}
                                homePrevPath={homePrevPath}
                                review={false}
                                special={true}
                                price={true}
                            ></DetailsCard>}
                        </div>
                    }
                </div>
            </div >
        </>
    );
};

export default Service;