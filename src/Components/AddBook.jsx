import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./addBook.css";
import {Link} from "react-router-dom";

export const AddBook = () => {
  return (
    <div  >
          <div>


      <h1 style={{color:'#4B7BE8'}}>Books</h1>

      <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Add</a>
  </li>
  <li class="nav-item">
  <Link to='/BookView' className="nav-link">Book Details</Link>  </li>
 
</ul>
</div>

<div >
        

        <div class="mb-3 row justify-content-center align-items-center">
        <label for="Subjects" class="col-sm-2 col-form-label">Subject</label>
        <div class="col-sm-3">
        <select class="form-select form-select-md" >
        <option selected>Please Select</option>
        <option value="1"> Physical Sciences</option>
        <option value="2">Life Sciences</option>
        <option value="3">Mathematics</option>
        </select>
        </div>
        </div>
        
        <div class="mb-3 row justify-content-center align-items-center">
        <label for="Grade" class="col-sm-2 col-form-label">Grade</label>
        <div class="col-sm-3">
        <select class="form-select form-select-md">
        <option selected>Please Select</option>
        <option value="1"> 8</option>
        <option value="2">9 </option>
        <option value="3">10</option>
        <option value="4">11 </option>
        <option value="5">12</option>
        </select>
        </div>
        </div>
        
        <div class="mb-3 row justify-content-center align-items-center">
        <label for="Description" class="col-sm-2 col-form-label">Description</label>
        <div class="col-sm-3">
        <select class="form-select form-select-md" >
        <option selected>Please Select</option>
        <option value="1"> Desc 1</option>
        <option value="2">Desc 2 </option>
        <option value="3">Desc 3</option>
        <option value="4">Desc 4 </option>
        <option value="5">Desc 5</option>
        </select>
        </div>
        </div>
        
        
        
        <div class="mb-3 row justify-content-center align-items-center">
        <label for="Date" class="col-sm-2 col-form-label">Date</label>
        <div class="col-sm-3">
        <input class="form-control" id="formFileMd" type="date"/>

                </div>
        </div>
        
        <div class="mb-3 row justify-content-center align-items-center">
        <label for="fileUpload" class="col-sm-2 col-form-label">Upload File</label>
        <div class="col-sm-3" >
        <div class="mb-3">
        <input class="form-control" id="formFileMd" type="file"/>
    </div>    </div>
        </div>
        
        <div >
        <button type="submit" className="btn btn-light">Save</button>
        
        </div>
</div>
  </div>
  )
  
}
