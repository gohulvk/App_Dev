import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Schedule.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import Footer from '../footer/Footer';

const Schedule = () => {
  const [item, setItem] = useState('');
  const [weight, setWeight] = useState('');
  const [pickUpTime, setPickUpTime] = useState('');
  const [dropAddress, setDropAddress] = useState('');
  const [formError, setFormError] = useState('');
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields are filled
    if (!item || !weight || !pickUpTime || !dropAddress) {
      setFormError('All fields are required');
      return;
    }

    // Validate weight is a positive number
    if (isNaN(weight) || weight <= 0) {
      setFormError('Please enter a valid weight greater than zero');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/pickup', {
        item,
        weight,
        pickUpTime,
        dropAddress,
        userId: user.id
      });
      
      // Assuming response.data contains the pickup details, including an ID
      const pickupId = response.data.id;

      // Display the ID in the alert message
      alert(`Pickup Scheduled successfully! Your pickup ID is ${pickupId}.`);
      
      setItem('');
      setWeight('');
      setPickUpTime('');
      setDropAddress('');
      setFormError('');
      
      navigate('/');
      
    } catch (error) {
      console.error('Error scheduling pickup:', error);
      setFormError('Error scheduling pickup. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <div className='schedulecss'>
        <p className='scheduletext'>Enter the details to schedule your pick up</p>
        <form onSubmit={handleSubmit}>
          <TextField
            id="item"
            label="Item"
            variant="filled"
            placeholder='Enter the type of item to be picked up'
            style={{ width: '50%' }}
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <br/><br/>
          <TextField
            id="weight"
            label="Weight (kg)"
            variant="filled"
            type="number"
            placeholder='Enter the weight of the object in kg'
            style={{ width: '50%' }}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            InputProps={{ inputProps: { min: 0 } }}
          />
          <br/><br/>
          <TextField
            id="pickuptime"
            label="Pick Up Time"
            variant="filled"
            type="time"
            placeholder='Select the pick-up time'
            style={{ width: '50%' }}
            value={pickUpTime}
            onChange={(e) => setPickUpTime(e.target.value)}
          />
          <br/><br/>
          <TextField
            id="dropaddress"
            label="Address"
            variant="filled"
            placeholder='Enter the place where the parcel should be dropped'
            style={{ width: '50%' }}
            value={dropAddress}
            onChange={(e) => setDropAddress(e.target.value)}
          />
          <br/><br/>
          {formError && <p style={{ color: 'red' }}>{formError}</p>}
          <Button variant="contained" size="large" type="submit">Schedule Pick up</Button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Schedule;
