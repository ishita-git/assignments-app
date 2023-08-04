import React from 'react'

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import './sidebar.scss'

const SideBar = () => {
  return (
    <div className="side-bar">
        <div className="list-container">
          <ul>
            <li>
              {" "}
              <DashboardOutlinedIcon /> Dashboard
            </li>
            <li>
              {" "}
              <NoteAltOutlinedIcon /> Assessment
            </li>
            <li>
              {" "}
              <QuizOutlinedIcon /> My Library
            </li>
            <hr />

            <li>
              <div className="round-status">
                {" "}
                <div className="admin-title">Admin</div>{" "}
                <div className="status-title">
                  <ContentPasteOutlinedIcon />
                  Round Status
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default SideBar