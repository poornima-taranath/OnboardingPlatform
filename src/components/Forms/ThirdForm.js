import { Button, Form } from 'antd';
import React, { useState } from 'react';
import { UserOutlined,UsergroupDeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './form.css'

const ThirdForm = (props) => {

  const [planOption,setPlanOptionClicked]=useState(false)
  const [choosenPlan,setChoosenPlan]=useState(0)

  const data = [
    {
        title:'For Myself',
        description:'Write better. Think clearly, stay organized.',
        icon:  <UserOutlined />,
        id:1

    },
    {
        title:'With My Team',
        description:'Wikis, docs, tasks, projects all in one place',
        icon:  <UsergroupDeleteOutlined/>,
        id:2

    }
  ]

  const handlePlanSelection = (id) =>{
    setPlanOptionClicked(!planOption)
    setChoosenPlan(id)
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    props.next()
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
   <>
       <div className='form-main-text'> How are you planning to use Eden?</div>
        <div className='subtitle-text'>We'll streamline your setup experience accordingly</div>
     <div className='choose-plan-container'>
       { data.map( planName => 
       <div key={planName.id} className={planOption && choosenPlan == planName.id ? 'choose-plan-box-clicked':"choose-plan-box" } 
            onClick={()=>handlePlanSelection(planName.id)}>
            <span className={planOption && choosenPlan == planName.id ? 'plan-icon-clicked':'' }>{planName.icon}</span>
           <div className='plan-title'>
             {planName.title}
           </div>
           <p className='plan-description'>{planName.description}</p>
        </div>)}

      </div> 
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
      <Form.Item
        wrapperCol={{
          offset: 1,
          span: 22,
        }}
      >
        <Button type="primary" htmlType="submit" className='next-step-btn'>
          Create Workspace
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default ThirdForm;