import React from 'react';

import { Form, Input, Select, InputNumber } from 'antd';

export default function CreateAccount({ formValues, setFormValues }) {
  return (
    <div>
      <h1>Sign up</h1>
      <h4>
        We will send you an Email once your request has been reviewed or you can
        login to check your status
      </h4>
      <Form.Item
        initialValue={formValues.firstName}
        label="First Name"
        name="firstName"
      >
        <Input
          name="firstName"
          placeholder="Jane"
          value={formValues.firstName}
        />
      </Form.Item>
      <Form.Item
        initialValue={formValues.lastName}
        label="Last Name"
        name="lastName"
      >
        <Input name="lastName" placeholder="Doe" value={formValues.lastName} />
      </Form.Item>
      <Form.Item initialValue={formValues.email} label="E-mail" name="email">
        <Input
          name="email"
          placeholder="example@mail.com"
          value={formValues.email}
        />
      </Form.Item>
      <Form.Item
        initialValue={formValues.password}
        label="Password"
        name="password"
      >
        <Input
          type="password"
          name="password"
          placeholder="example@mail.com"
          value={formValues.password}
        />
      </Form.Item>
      <Form.Item
        initialValue={formValues.confirmPassword}
        label="Confirm password"
        name="confirmPassword"
      >
        <Input
          type="password"
          name="confirmPassword"
          placeholder="example@mail.com"
          value={formValues.confirmPassword}
        />
      </Form.Item>
    </div>
  );
}