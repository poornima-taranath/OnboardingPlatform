import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './form.css'

const ThirdForm = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values);
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
        span: 10,
      }}
      wrapperCol={{
        span: 20   ,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <div className='form-main-text'> How are you planning to use Eden?</div>
        <div className='subtitle-text'>We'll streamline your setup experience accordingly</div>
      <Form.Item
       wrapperCol={{
        offset: 2,
        span: 10,
      }}
      >
        <div>CHild box</div>
        <div>CHild box</div>
      </Form.Item>

      <Form.Item
        wrapperCol={{
            offset: 2,
            span: 10,
          }}
      >
        <div>Child</div>
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

export default ThirdForm;