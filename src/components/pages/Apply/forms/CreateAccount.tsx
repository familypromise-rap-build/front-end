import React from 'react';

import { useSelector } from 'react-redux';

import { Form, Input, Card, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

export default function CreateAccount({ formValues, setFormValues }) {
  const errorMessage = useSelector(state => state.user.errorMessage);
  return (
    <div>
      <Card title={<Title level={4}>Sign Up - Family Promise Account</Title>}>
        <Text type="secondary">
          We will send you an email once your request has been reviewed! You can
          also login to check your status.
        </Text>
        <Divider dashed />
        <Form.Item
          hasFeedback
          initialValue={formValues.firstName}
          label="First Name"
          name="firstName"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Please enter your first name',
            },
          ]}
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
          hasFeedback
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Please enter your last name',
            },
          ]}
        >
          <Input
            name="lastName"
            placeholder="Doe"
            value={formValues.lastName}
          />
        </Form.Item>
        <Form.Item
          hasFeedback
          initialValue={formValues.email}
          label="E-mail"
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please enter a valid email',
            },
          ]}
        >
          <Input
            name="email"
            placeholder="example@mail.com"
            value={formValues.email}
          />
        </Form.Item>
        <Form.Item
          hasFeedback
          initialValue={formValues.password}
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              min: 10,
              message: 'Password must be at least 10 characters',
            },
          ]}
        >
          <Input type="password" name="password" value={formValues.password} />
        </Form.Item>
        <Form.Item
          initialValue={formValues.confirmPassword}
          label="Confirm password"
          name="confirmPassword"
        >
          <Input
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
          />
        </Form.Item>
        {errorMessage && <Text type="danger">{errorMessage}</Text>}
      </Card>
    </div>
  );
}
