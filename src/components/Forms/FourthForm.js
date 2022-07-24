import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './form.css'

const FourthForm = (props) => {
  const onFinish = (values) => {
    props.prev()
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
        <div className='form-main-text'> Congratulations, {props.fullName} ! </div>
        <div className='subtitle-text'>You have completed onboarding, you can start using Eden now</div>
  
      <Form.Item
        wrapperCol={{
          offset: 2,
          span: 20,
        }}
      >
        <Button type="primary" htmlType="submit" className='next-step-btn'>
          Launch Eden
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FourthForm;