import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard/DoctorCard';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/odht82/fake-api-zen-rx/main/doctorData.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div className="doctor">
            <div className="doctor-container">
                <h2 className='doctor-section-heading'>
                    Doctors
                </h2>
                <div className="doctor-list-section">
                    {doctors.map(doctor => <DoctorCard
                        key={doctor.key}
                        doctor={doctor}
                    ></DoctorCard>)}
                </div>
            </div>
        </div >
    );
};

export default Doctors;