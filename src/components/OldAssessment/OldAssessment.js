import React from 'react'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import './oldassessment.scss'

const OldAssessment = () => {
    return (
        <div className='old-assessment'>
            <div className='top'>
                <div className='main-container'>
                    <div className='icon-container'><BusinessCenterOutlinedIcon className='icon' /></div>
                    <div className='text-container'>
                        <div className='label'>Math Assessment</div>
                        <div className='small-text'>
                            <div className='job'>Job</div>
                           
                            <div className='date-container'>< CalendarMonthOutlinedIcon />20 April 2023</div>
                        </div>

                    </div>
                </div>
                <div className='three-dots'><MoreVertOutlinedIcon /></div>
            </div>
            <hr />
            <div className='bottom'>
                <div className='left'>
                    <div className='duration'>
                        <div className='number'>00</div>
                        <div className='label'>Duration</div>

                    </div>
                    <div className='questions'>
                        <div className='number'>00</div>
                        <div className='label'>Questions</div>

                    </div>
                </div>
                <div className='right'>
                    <div className='share-container'>
                        <InsertLinkIcon className='icon'/>
                        <div className='label'>Share</div>

                    </div>
                    <div className='user-container'>
                        <div className='text'>LP</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OldAssessment