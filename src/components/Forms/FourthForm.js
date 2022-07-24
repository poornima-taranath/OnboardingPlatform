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
        <div> How are you planning to use Eden?</div>
        <div>We'll streamline your setup experience accordingly</div>
      <Form.Item
      >
        <div>CHild box</div>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 2,
          span: 20,
        }}
      >
        <Button type="primary" htmlType="submit" className='next-step-btn'>
          Done
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FourthForm;