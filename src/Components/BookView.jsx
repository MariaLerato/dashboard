import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./addBook.css";
import {Link} from "react-router-dom";

export const BookView = () => {
  return (
    <div  >
          <div>


      <h1 style={{color:'#4B7BE8'}}>Books</h1>

      <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-item" aria-current="page" href="#">Add </a>
    
  </li>
  <li class="nav-item">
  <Link to='/roomView' className="nav-link active">Details</Link>  </li>
 
</ul>
</div>

<div >
<table class="table table-bordered " style={{marginLeft:20, width:900, justifyContent:'center', alignContent:'center'}}>
    <thead>
      <tr>
        <th style={{width:100}}> Subject</th>
        <th style={{width:100}}> Grade</th>
        <th style={{width:100}}>Description </th>
        <th style={{width:100}}>Date</th>
        <th style={{width:180}}>Book Image</th>

      </tr>
    </thead>
    <tbody>
      <tr >
        <td>Physical Sciences</td>
        <td></td>
        <td>Mathematics </td>
        <td>Economics</td>

        <td>
     
        <button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10, color:'#fff', backgroundColor:'#99ff99'}}>View</button>
        <button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10,color:'#fff', backgroundColor:'#ffe066'}}>Edit</button>
        <button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10, color:'#fff',backgroundColor:'#ff6666'}}>Delete</button>


        </td>
      </tr>
      <tr>
        <td>Standard Suite</td>
        <td>2</td>
        <td>Room 5</td>
        <td>R2100</td>

        <td>
     
        <button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10, color:'#fff', backgroundColor:'#99ff99'}}>View</button>
        <button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10,color:'#fff', backgroundColor:'#ffe066'}}>Edit</button>
        <button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10, color:'#fff',backgroundColor:'#ff6666'}}>Delete</button>


        </td>
      </tr>
      <tr>
        <td>Junior Suite</td>
        <td>1</td>
        <td>Room 7</td>

        <td>R1800</td>
       

        <td>
     
<td>

  
<button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10, color:'#fff', backgroundColor:'#99ff99'}}>View</button>
<button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10,color:'#fff', backgroundColor:'#ffe066'}}>Edit</button>
<button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10, color:'#fff',backgroundColor:'#ff6666'}}>Delete</button>
{/* <button type="button" className="btn btn-light" style={{width:70, marginLeft:10}}>Edit</button>
<button type="button" className="btn btn-light" style={{width:70, marginLeft:10}}>Delete</button> */}


        </td>
        </td>
      </tr>
    </tbody>
  </table>



        </div>
  </div>
  )
  
}
