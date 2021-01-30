import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table';

import styles from '../../../styles/pages/admin.module.css';

import { axiosWithAuth } from '../../../api';

import { tableIcons } from '../../../utils/tableIcons';

export default function Index() {
  const [isFetching, setIsFetching] = useState(false);
  const [state, setState] = useState({
    columns: [
      { title: 'First', field: 'firstName' },
      { title: 'Last ', field: 'lastName' },
      { title: 'email', field: 'email', type: 'email', editable: 'never' },
      {
        title: 'role',
        field: 'role',
        lookup: {
          admin: 'admin',
          tenant: 'tenant',
          landlord: 'landlord',
          pending: 'pending',
        },
      },
    ],
    data: [],
  });

  const fetchUsers = async () => {
    setIsFetching(true);
    try {
      let res = await axiosWithAuth().get('/users');
      setState({ ...state, data: res.data });
    } catch (error) {
      console.log(error);
      alert('error');
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <MaterialTable
          isLoading={isFetching}
          options={{
            exportButton: true,
          }}
          editable={{
            isDeletable: rowData => rowData.role !== 'admin',
            isEditable: rowData => rowData.role !== 'admin',
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                resolve();
                setState({
                  ...state,
                  data: state.data.map(row => {
                    if (row.id === oldData.id) {
                      return newData;
                    }
                    return row;
                  }),
                });

                const updatedUser = {
                  firstName: newData.firstName,
                  lastName: newData.lastName,
                  role: newData.role,
                };

                axiosWithAuth()
                  .put(`/users/${oldData.id}`, updatedUser)
                  .catch(err => alert('Failed to update user'));
              }),
          }}
          icons={tableIcons}
          title="Users"
          columns={state.columns}
          data={state.data}
        />
      </div>
    </div>
  );
}
