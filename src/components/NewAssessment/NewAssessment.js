import React ,{useState} from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './newassessment.scss'

const NewAssessment = () => {

  const[click,setClick] = useState(false);

  const onClickHandler = () =>{
    setClick(true);
  }

  return (
    <div className='new-assessment'>

        <div className='upload-container'>
          <div className='icon-container'><AddOutlinedIcon className='icon' onClick={onClickHandler}/></div>
          <div className='label'>New Assessment</div>
          <div className='content'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</div>
        </div>
    </div>
  )
}

export default NewAssessment