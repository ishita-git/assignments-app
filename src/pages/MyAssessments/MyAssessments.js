import React from 'react'
import './myAssessments.scss'
import NewAssessment from '../../components/NewAssessment/NewAssessment'
import OldAssessment from '../../components/OldAssessment/OldAssessment'

const MyAssessments = () => {
  return (
    <div className='my-assessments'>
      <div className='container'>
        <NewAssessment/>
        <OldAssessment/>
        <OldAssessment/>
      </div>
    </div>
  )
}

export default MyAssessments