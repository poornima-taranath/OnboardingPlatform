import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './form.css'

const SecondForm = (props) => {
  const onFinish = (values) => {
    props.next()
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 14    ,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
    <h2> Let's set up a home for all your work</h2>
    <div>You can always create another workspace later</div>
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[
          {
            required: true,
            message: 'Please input your full name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Display Name"
        name="displayName"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 2,
          span: 20,
        }}
      >
        <Button type="primary" htmlType="submit" className='next-step-btn'>
          Create Workspace
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SecondForm;