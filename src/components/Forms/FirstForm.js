import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './form.css'
import useSelection from 'antd/lib/table/hooks/useSelection';

const FirstForm = (props) => {

 
 const [fullName,setFullName]= useState('')

  const onFinish = (values) => {
    console.log('Success:', values);
    setFullName(values.fullName)
    props.next()
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      layout='vertical'
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

export default FirstForm;