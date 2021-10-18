import React, { useEffect, useState } from "react";
import "./Services.css";
// import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard/ServiceCard";

function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./serviceData.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])
  console.log(services);
  return (
    <div className="service">
      <div className="service-container">
        <h2 className="service-section-heading">
          Services
        </h2>
        <div className="service-list-section">
          {services.map(service => <ServiceCard
            key={service.key}
            service={service}
          ></ServiceCard>)}
        </div>
      </div>
    </div >
  );
}

export default Services;
