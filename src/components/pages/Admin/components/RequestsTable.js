import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table';

import styles from '../../../../styles/pages/admin.module.css';

import { tableIcons } from '../../../../utils/tableIcons';
import { axiosWithAuth } from '../../../../api/axiosWithAuth';

import GavelIcon from '@material-ui/icons/Gavel';

import Case from '../../../modals/Case';

export default function RequestsTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [userBeingReviewed, setUserBeingReviewed] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [state, setState] = useState({
    columns: [
      { title: 'tenantId', field: 'tenantId' },
      { title: 'landlordId', field: 'landlordId' },
      {
        title: 'requestDate',
        field: 'requestDate',
      },
      {
        title: 'apm approval',
        field: 'apmApproval',
        lookup: {
          false: 'no',
          true: 'yes',
        },
      },
      {
        title: 'pm approval',
        field: 'pmApproval',
        lookup: {
          false: 'no',
          true: 'yes',
        },
      },
      {
        title: 'Request Status',
        field: 'requestStatus',
        lookup: {
          received: 'Received',
          inReview: 'In Review',
          approved: 'Approved',
          denied: 'Denied',
        },
      },
    ],
    data: [],
  });

  const fetchUsers = async () => {
    setIsFetching(true);
    try {
      let res = await axiosWithAuth().get('/requests/table');
      setState({ ...state, data: res.data });
    } catch (error) {
      console.log(error.response);
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
      {isOpen && (
        <Case
          setIsOpen={setIsOpen}
          user={userBeingReviewed}
          setUser={setUserBeingReviewed}
          setState={setState}
          state={state}
        />
      )}
      <div className={styles.table}>
        <MaterialTable
          isLoading={isFetching}
          options={{
            // Allows users to export the data as a CSV file
            exportButton: true,
          }}
          actions={[
            {
              icon: GavelIcon,
              tooltip: 'Review',
              onClick: async (event, rowData) => {
                // Update the users request to be in review

                if (rowData.requestStatus === 'received') {

                  await axiosWithAuth().put(`/requests/${rowData.id}`, {
                    requestStatus: 'inReview',
                  });
                }
                setUserBeingReviewed(rowData);
                setIsOpen(true);
              },
            },
          ]}
          icons={tableIcons}
          title="Requests for rental assistance"
          columns={state.columns}
          data={state.data}
        />
      </div>
    </div>
  );
}
