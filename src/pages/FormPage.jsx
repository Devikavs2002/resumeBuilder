import React from 'react'
import StepperCompound from '../components/StepperCompound'
import Preview from '../components/Preview'


const FormPage = () => {
  return (
    <>
    <div className="row m-5">
      <div className="col">
        <StepperCompound/>

      </div>
      <div className="col">
        <Preview/>

      </div>
    </div>
    </>
  )
}

export default FormPage