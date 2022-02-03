import React from 'react';
import logo from './images/image.png'
import './StyleSheet.css'
import 'font-awesome/css/font-awesome.min.css';
import { AddBook } from "./AddBook";

import {Link} from 'react-router-dom'

export const Sidemenu = () => {
  return <div className='menu-container'>
      <div className='head-container'>
          <img src={logo} className='picture' ></img>
          <h2>EduSharp</h2>
      </div>
      <div className='screens'>
        <div className='active'>  <i className='fa fa-home '></i>   Home<br/><br/></div><br/>
          <Link to="/AddBook"  aria-current="page"> 
          <i className='fa fa-bell '></i>
        <span class="ms-2">Notifications</span> </Link>
          <br/><br/>
          <i class="fa fa-exclamation-circle "></i> Complaints<br/><br/>
          <i className='fa fa-user '></i>   Profile<br/><br/>
          <i className='fa fa-users '></i>Manage Users<br/>
      </div>
  </div>;
};
