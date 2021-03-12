import React from 'react';

import { Statistic } from 'antd';

export default function Footer({ request }) {
  return (
    <div
      style={{
        display: 'flex',
        width: 'max-content',
        justifyContent: 'flex-end',
        gap: '1rem',
        position: 'absolute',
        bottom: 0,
      }}
    >
      <Statistic
        title="Status"
        value={request.requestStatus}
        style={{
          marginRight: 32,
        }}
      />

      <Statistic
        title="Residents"
        value={request.familySize}
        style={{
          marginRight: 32,
        }}
      />
      <Statistic
        title="Monthly Income"
        prefix="$"
        value={request.monthlyIncome}
      />
    </div>
  );
}
