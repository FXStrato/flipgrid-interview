import { useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './ConfirmedForm.css';

const ConfirmedForm = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className='confirmed-form form-box'>
      {state && state.firstname && state.email ? (
        <>
          <h1>
            <span style={{ fontWeight: 500 }}>Welcome,</span>
            <br /> {state.firstname}!
          </h1>
          <p>
            You have been registered for this awesome service. Please check your
            email listed below for instructions
          </p>
          <p style={{ fontWeight: 700 }}>{state.email}</p>
          <div className='align-right'>
            <Button text='Sign In' />
          </div>
        </>
      ) : (
        <>
          <h1>Error</h1>
          <p>Oops! Looks like there was a small problem.</p>
        </>
      )}
    </div>
  );
};

export default ConfirmedForm;
