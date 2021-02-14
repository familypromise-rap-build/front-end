import React from 'react';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import styles from '../../../../../styles/pages/home.module.css';

import { Button } from 'antd';

import RentalAssistanceProgramBlurb from './components/RentalAssistanceProgramBlurb';

export default function Index() {
  const history = useHistory();

  const currentUser = useSelector(state => state.user.currentUser);

  //Evt Handler to send to form
  const routeToForm = () => {
    history.push('/apply');
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>
          Hi {currentUser.firstName}, Welcome to the Family Promise Rental
          Assistance Program
        </h1>
        {!currentUser.isRequestingAssistance && (
          <RentalAssistanceProgramBlurb />
        )}
        {currentUser.requestStatus === 'approved' && (
          <h2>
            Your request for rental assistance has been accepted. An agent will
            reach out to you shortly
          </h2>
        )}
        {currentUser.requestStatus === 'denied' && (
          <h2>Your request for rental assistance has been denied.</h2>
        )}
      </div>

      {!currentUser.isRequestingAssistance && (
        <p>
          <Button type="primary" size="large" onClick={routeToForm}>
            Apply for Rental Assistance
          </Button>
        </p>
      )}
    </div>
  );
}
