import React from "react";

import "./mainPage.scss";
import InfoBar from "../../components/InfoBar/InfoBar";
import SideBar from "../../components/SideBar/SideBar";
import MyAssessments from "../MyAssessments/MyAssessments";


const MainPage = () => {
  return (
    <div className="main-page">
      <SideBar />

      <div className="main-content">
        <div className="info-title">
          <div className="info">
            <div className="assessment">Assessment</div>
            <div className="my-assessment">My Assessments</div>
          </div>
        </div>
        <div className="info-body">
          <div className="body-top">
            <div className="bar-title">Assessments Overview</div>
            <InfoBar />
            <div className="assesments-conatiner">
              <div className="title">My Assessments</div>
              <div className="cards-container">
              <MyAssessments /> 
             
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
