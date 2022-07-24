import { Button, Form, Input } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './form.css'

const FirstForm = (props) => {


  const onFinish = (values) => {
    console.log('Success:', values);
    props.setFullName(values.fullName)
    props.next()
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout='vertical'
      className='main-form'
      name="basic"
      
      labelCol={{
        span: 14,
      }}
      wrapperCol={{
        span: 20    ,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
    <h2 className='form-main-text'> Welcome, first things first...</h2>
    <div className='subtitle-text'>You can always change them later</div>
      <Form.Item
       className='first-form-tem'
        label="Full Name"
        name="fullName"
        wrapperCol={{
            span: 24,
           
          }}
        rules={[
          {
            required: true,
            message: 'Please input your full name',
          },
        ]}
      >
        <Input placeholder='Steve Jobs' />
      </Form.Item>

      <Form.Item
        className='second-form-tem'
        label="Display Name"
        name="displayName"
        wrapperCol={{
            span: 24,
        
          }}
        rules={[
          {
            required: true,
            message: 'Please input your name',
          },
        ]}
      >
        <Input placeholder='Steve'/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 24,
         
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