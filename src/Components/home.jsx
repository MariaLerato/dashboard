import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeCard from "../ReuseblesComps/HomeCards/HomeCard";
import { Sidemenu } from "./sidemenu";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="maincontent">
      <div className="heading">
        <div className="search">
          <i className="fa fa-search"></i>
          <input type={"text"} placeholder="   Find" />
        </div>
        <div className="username">
          <p>Hi,Username</p>
          <i className="fa fa-user-circle fa-2x"></i>
          <div className="icon">
            <i className="fa fa-bell"></i>
          </div>
        </div>
      </div>
      <div className="body">
          <div className="text-head">
            <h1 style={{ color: "white" }}>
              Welcome to our EduSharp Admin System
            </h1>
          </div>
          <div className="cards">
            <div className="cardRow">
              <HomeCard
                path="/home/AddQuestion"
                icon="fa fa-edit fa-3x"
                title={"Question Papers"}
              />
              <HomeCard
                path="/home/AddLesson"
                icon="fa fa-calendar fa-3x"
                title={"Lessons"}
              />
            </div>
            <div className="cardRow">
              <HomeCard
                path="/home/AddBook"
                icon="fa fa-list-alt fa-3x"
                title={"Books"}
              />
              <HomeCard
                path="/home/LessonPage"
                icon="fa fa-copy fa-3x"
                title={"Material"}
              />
            </div>
          </div>
        </div>
    </div>
  );
};

/*

<div className="data">
        
        <div className="body">
          <div className="text-head">
            <h1 style={{ color: "white" }}>
              Welcome to our EduSharp Admin System
            </h1>
          </div>
          <div className="cards">
            <div className="cardRow">
              <HomeCard
                path="/AddQuestion"
                icon="fa fa-edit fa-3x"
                title={"Question Papers"}
              />
              <HomeCard
                path="/AddLesson"
                icon="fa fa-calendar fa-3x"
                title={"Lessons"}
              />
            </div>
            <div className="cardRow">
              <HomeCard
                path="/AddBook"
                icon="fa fa-list-alt fa-3x"
                title={"Books"}
              />
              <HomeCard
                path="/AddLesson"
                icon="fa fa-copy fa-3x"
                title={"Material"}
              />
            </div>
          </div>
        </div>
      </div>


*/
