import React from "react";
import logo from "./images/image.png";
import "./StyleSheet.css";
import "font-awesome/css/font-awesome.min.css";
import SidenavBtn from "../ReuseblesComps/SideNav/SidenavBtn";

export const Sidemenu = () => {
  return (
    <div className="menu-container">
      <div className="head-container">
        <img src={logo} alt="" className="picture"></img>
        <h2>EduSharp</h2>
      </div>
      <div className="screens">
        <div className="active"></div>

        <SidenavBtn icon="fa fa-home" title="Home" path="/home" current="home"/>
        <SidenavBtn icon="fa fa-bell" title="Notifications" path="/Notification" current="Notification"/>
        <SidenavBtn
          icon="fa fa-exclamation-circle"
          title="Complaints"
          path="/Complaints"
          current="Complaints"
        />
        <SidenavBtn icon="fa fa-user " title="Profile" path="/Profile"  current="Profile"/>
        <SidenavBtn icon="fa fa-users" title="Manage Users" path="/ManageUsers"  current="ManageUsers"/>
      </div>
    </div>
  );
};
