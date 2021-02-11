import React from 'react';
import UsersTable from './components/UsersTable';
import { useHistory } from 'react-router-dom';
import styles from '../../../styles/pages/admin.module.css';

import { Button } from 'antd';

export default function Index() {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <UsersTable />
        <Button
          type="primary"
          className={styles.button}
          onClick={() => history.push('/create')}
        >
          Create Program Manager
        </Button>
      </div>
    </div>
  );
}
