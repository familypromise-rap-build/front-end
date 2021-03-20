import React, { useState } from 'react';
import styles from '../../../../styles/pages/admin.module.css';
import { axiosWithAuth } from '../../../../api/axiosWithAuth';

const Analytics = () => {
  const [peopleServed, setPeopleServed] = useState();

  function getPeopleServed() {
    axiosWithAuth()
      .get('/analytics')
      .then(res => {
        const data = res.data.sumRequests;
        return setPeopleServed(data[0].count);
      })
      .catch(err => console.error(err));
  }
  return (
    <div>
      <div className={styles.cardsContainer}>
        {getPeopleServed()}
        <Card value={peopleServed} title="Families served" color="#006ab3" />
        <Card value="62" title="People served" color="#006ab3" />
        <Card value="$ 1000" title="Budget" color="#006ab3" />
      </div>
    </div>
  );
};

const Card = props => {
  return (
    <div style={{ backgroundColor: props.color }} className={styles.card}>
      <h3 className={styles.value}>{props.value}</h3>
      <h4 className={styles.title}>{props.title}</h4>
    </div>
  );
};

export default Analytics;
