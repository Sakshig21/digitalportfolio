import React from 'react'
import './Education.css'

const Education = () => {
  return (
   <div className="education container-fluid">
    <div className="title">
            <h1 className='title_head edu_title'>EDUCATION</h1>
            <p className='title_para edu_para'>Academics</p>
            </div>
    <div className="container edu_contain">
        <div className="row edu_wrapper">
            <div className="col-lg-4 col-sm-12 columns">
                <h3>Bachelor Of Architecture</h3>
                <p>9.0 CGPA</p>
                
            </div>
            <div className="col-lg-4 col-sm-12 columns">
                <h3>HSC</h3>
                <p>86%</p>
                
            </div>
            <div className="col-lg-4 col-sm-12 columns">
                <h3>10th Standard</h3>
                <p>9.8 CGPA</p>
                
            </div>
        </div>
    </div>

   </div>
  )
}

export default Education