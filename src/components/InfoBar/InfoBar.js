import React from "react";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';

import "./infoBar.scss";

const InfoBar = () => {
  return (
    <div className="info-bar">
      <div className="container">
        <div className="total-assessment">
          <div className="title">Total Assessment</div>
          <div className="number-container">
            <div className="icon-container">
              <ViewAgendaOutlinedIcon className="icon" />
            </div>
            <div className="number">34</div>
          </div>
        </div>
        <div className="candidates">
          <div className="title">Candidates</div>
          <div className="candidates-container">
            <div className="icon-container">
              <GroupOutlinedIcon className="icon" />
            </div>
            <div className="total-candidates">
              <div className="figures">
                <span className="number">11,145</span>{" "}
                <span className="estimation">+89</span>
              </div>
              <div className="label">Total candidate</div>
            </div>
            <hr />

            <div className="who-attempted">
              <div className="figures">
                <span className="number">1,14</span>{" "}
                <span className="estimation">+89</span>
              </div>
              <div className="label">Who Attempted</div>
            </div>
          </div>
        </div>

        <div className="candidates-source">
          <div className="title"> Candidates Source</div>
          <div className="candidates-source-container">
            <div className="icon-container">
              <LanguageOutlinedIcon className="icon" />
            </div>
            <div className="email">
              <div className="figures">
                <span className="number">1100</span>{" "}
                <span className="estimation">+89</span>
              </div>
              <div className="label">E-mail</div>
            </div>
            <hr />
            <div className="social-share">
              <div className="figures">
                <span className="number">145</span>{" "}
                <span className="estimation">+89</span>
              </div>
              <div className="label">Social Share</div>
            </div>
            <hr />
            <div className="unique-link">
              <div className="figures">
                <span className="number">145</span>{" "}
                <span className="estimation">+89</span>
              </div>
              <div className="label">Unique Link</div>
            </div>
          </div>
        </div>
        <div className="total-purpose">
          <div className="title">Total Purpose</div>
          <div className="total-purpose-container">
            <div className="icon-container">
              <InsertLinkOutlinedIcon className="icon" />
            </div>
            <div className="number">11</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
