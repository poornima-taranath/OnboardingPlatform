import {Steps } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './steps.css'
import FirstForm from '../Forms/FirstForm';
import SecondForm from '../Forms/SecondForm';
import ThirdForm from '../Forms/ThirdForm';
import FourthForm from '../Forms/FourthForm';
const { Step } = Steps;

const ProgressSteps = () => {
  const [current, setCurrent] = useState(0);
  const [fullName,setFullName]= useState('')

  const steps = [
    {
      content: ({prev,next})=><FirstForm next={next} prev={prev} setFullName={setFullName}/>
    },
    {
      content: ({prev,next})=><SecondForm next={next} prev={prev}/>
    },
    {
      content:  ({prev,next})=><ThirdForm next={next} prev={prev}/>
    },
    {
      content: ({prev,next})=><FourthForm next={next} prev={prev} fullName={fullName}/>
    },
  ];


  const next = () => {
    if (current >=0 && current<steps.length) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current >= 1) {
      setCurrent(current - 3);
    }
  };

  return (
    <>
      {current !== 3 ? <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>:null}
      <div className="steps-content">{steps[current].content({prev,next})}</div>
    </>
  );
};

export default ProgressSteps;