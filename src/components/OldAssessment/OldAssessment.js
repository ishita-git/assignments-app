import React from 'react'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import './oldassessment.scss'

const OldAssessment = () => {
  return (
    <div className='old-assessment'>
        <div className='top'>
            <div className='main-container'>
                <div className='icon-container'><BusinessCenterOutlinedIcon className='icon'/></div>
                <div className='text-container'>
                    <div className='label'>Math Assessment</div>
                    <div className='small-text'>
                        <div className='job'>Job</div>
                        <hr/>
                        <div className='date-container'>< CalendarMonthOutlinedIcon/>20 April 2023</div>
                    </div>

                </div>
            </div>
            <div className='three-dots'><MoreVertOutlinedIcon/></div>
        </div>
        <hr/>
        <div className='bottom'>
            <div className='left'>left</div>
            <div className='right'>right</div>
        </div>
    </div>
  )
}

export default OldAssessment