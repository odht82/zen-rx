import React, { useEffect, useState } from "react";
import "./HomeServices.css";
import HomeServiceCard from "./HomeServiceCard/HomeServiceCard";

function HomeServices() {
  const [HomeServices, setHomeservices] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/odht82/fake-api-zen-rx/main/HomeServiceData.json")
      .then(res => res.json())
      .then(data => setHomeservices(data));
  }, [])
  return (
    <div className="HomeService">
      <div className="HomeService-container">
        <h2 className="HomeService-section-heading">
          Services
        </h2>
        <div className="HomeService-list-section">
          {HomeServices.map(HomeService => <HomeServiceCard
            key={HomeService.key}
            HomeService={HomeService}
          ></HomeServiceCard>)}
        </div>
      </div>
    </div >
  );
}

export default HomeServices;
