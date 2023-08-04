import React from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './newassessment.scss'

const NewAssessment = () => {
  return (
    <div className='new-assessment'>

        <div className='upload-container'>
          <div className='icon-container'><AddOutlinedIcon className='icon'/></div>
          <div className='label'>New Assessment</div>
          <div className='content'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</div>
        </div>
    </div>
  )
}

export default NewAssessment