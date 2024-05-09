import React from 'react';
import './Home.css';
import MultiStep from 'react-multistep';
import PersonalDetails from './MultiSteps/PersonalDetails';
import MedicalDetails from './MultiSteps/MedicalDetails';
import AddressDetails from './MultiSteps/AddressDetails';
import Nav from '../components/Navbar/Nav';
import { Link } from 'react-router-dom';

const steps = [
  { name: 'PersonalDetails', component: <PersonalDetails /> },
  { name: 'AddressDetails', component: <AddressDetails /> },
  { name: 'MedicalDetails', component: <MedicalDetails /> },
];

const Home = () => {
  return (
    <div className='HomepageMain'>
         <Nav />
      <div className="homepage">
        <div className="HomeSteps">
          <h4>Add Patient</h4>
          <div className="multistep-container">
            <MultiStep steps={steps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
