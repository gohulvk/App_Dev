import React, { useContext, useState } from 'react';
import './Home.css';
import UserContext from '../Context/UserContext';
import Header from '../Header/Header';
import { Button, TextField } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';

const Home = () => {
  const { user } = useContext(UserContext);
  const [trackerId, setTrackerId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleTrack = () => {
    if (!trackerId) {
      setError('Tracker ID is required');
      return;
    }
    setError('');
    navigate('/tracker', { state: { trackerId } });
  };

  return (
    <div>
      <Header />
      <p className='usrnme'>Welcome user.name</p>
      <div className='trackerhome'>
        <center>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <TextField
                id="Trackerid"
                label="Tracker ID"
                variant="outlined"
                style={{ width: '50%' }}
                value={trackerId}
                onChange={(e) => setTrackerId(e.target.value)}
                error={!!error}
                helperText={error}
              />
            </div>
            <br />
            <div>
              <Button variant="contained" size="large" onClick={handleTrack}>
                Track
              </Button>
            </div>
          </form>
        </center>
      </div>
      <p className='manageship'>Manage your shipments</p>
      <div className='homemangefet'>
        <div className='pickupshe'>
          <p className='pickupshetex'>
            <NavLink to="/schepic" style={{ textDecoration: 'none', color: "rgb(118, 118, 159)" }}>
              Schedule Pickup
            </NavLink>
          </p>
        </div>
        <div className='findloc'>
          <p className='pickupshetex'>
            <NavLink to="/findloc" style={{ textDecoration: 'none', color: "rgb(118, 118, 159)" }}>
              Find location
            </NavLink>
          </p>
        </div>
        <div className='fulesurchage'>
          <p className='pickupshetex'>
            <NavLink to="/fuelsurch" style={{ textDecoration: 'none', color: "rgb(118, 118, 159)" }}>
              Fuel Surcharge
            </NavLink>
          </p>
        </div>
        <div className='FAQ'>
          <p className='pickupshetex'>
            <NavLink to="/FAQ" style={{ textDecoration: 'none', color: "rgb(118, 118, 159)" }}>
              FAQ
            </NavLink>
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
