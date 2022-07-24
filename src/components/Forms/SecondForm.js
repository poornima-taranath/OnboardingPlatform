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

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <div style={{color:'darkgray'}}>www.eden.com/</div>
    </Form.Item>
  );

  return (
    <Form
    layout='vertical'
    className='main-form'
      name="basic"
      labelCol={{
        span: 8,
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
    <h2 className='form-main-text'> Let's set up a home for all your work</h2>
    <div className='subtitle-text'>You can always create another workspace later</div>

      <Form.Item
        label="WorkSpace Name"
         name="workspaceName"
         wrapperCol={{
            offset: 2,
            span: 20,
          }}
        rules={[
          {
            required: true,
            message: 'Please input your workspace name',
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
       
        label="WorkSpace Url"
        name="workspaceUrl"
      >
        <Input  addonBefore={prefixSelector} />
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