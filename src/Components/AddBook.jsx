// import React from 'react';
import './AddBook.css'
import logo from './images/image.png'
export const AddBook = () => {
  return <div>
    <div className="username2">
            <p>Hi,Username</p>
            <i className="fa fa-user-circle fa-2x"></i>
            <div className="icon">
            <i className="fa fa-bell"></i>
            </div>
          </div>
<table>
  <tr>
    <td className="menu2">
    <div >
    <div className='head-container2'>
          <img src={logo} className='picture' ></img>
          <h2>EduSharp</h2>
      </div>
      <div className='screens'>
        <div className='active'>  <i className='fa fa-home '></i> Home<br/><br/></div><br/>
          <i className='fa fa-bell '></i>Notifications<br/><br/>
          <i class="fa fa-exclamation-circle "></i> Complaints<br/><br/>
          <i className='fa fa-user '></i>   Profile<br/><br/>
          <i className='fa fa-users '></i>Manage Users<br/>
      </div>
      </div>
    </td>
    <td className='MyData'>

    <div >
<h1>Books</h1>
   <div className='grey'>
     <div className='Menu'>
      <li><a className='Curent'>Add</a></li>
      <li><a>View</a></li>
     </div>
<div className='Info'>
<table>
  <tr className='row'>
    <td className='First'>Subject </td>
    <td><select className='select'></select></td>
  </tr>
  <tr className='row'>
    <td className='First' > Grade </td>
    <td><select className='select'></select></td>
  </tr>
  <tr className='row'>
    <td className='First'> Description</td>
    <td><select className='select'></select></td>
  </tr >
  <tr className='row'>
    <td className='First'>Subject </td>
    <td><select className='select'></select></td>
  </tr>
  <tr className='row'>
    <td className='First' > Date </td>
    <td><select className='select'></select></td>
  </tr>
  <tr className='row'>
    <td className='First'>Upload Video </td>
    <td><input className='file' type='file'></input></td>
  </tr>
  <tr className='row'>
    <td> </td>
    <td><button type='button' className='Btn'> Save</button></td>
  </tr>
</table>
</div>
   </div>
     </div>
    </td>
  </tr>
</table>


  </div>;
};
