<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import React, { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

>>>>>>> 7fe5b0d8feb112345833e5f4a401def0fbd14feb
import { AddBook } from "./AddBook";
import "./AddBook.css";
import { ViewBooks } from "./ViewBooks";
import "./ViewBooks.css"
import { ReportBooks } from "./ReportBooks";
import "./ReportBooks.css"

import { AddLesson } from "./AddLesson";
import "./AddLesson.css";
import { ViewLesson } from "./ViewLesson";
import "./ViewLesson.css";
import { ReportLesson } from "./ReportLesson";
import "./ReportLesson.css";

import { AddQuestion } from "./AddQuestion";
import "./AddQuestion.css"
import { ViewPaper } from "./ViewPaper";
import "./ViewPaper.css";
import { ReportPaper } from "./ReportPaper";
import "./ReportLesson.css";

import { Home } from "./home";
import { Signin } from "./signIn";
import { SignUp } from "./signUp";
import Notification from "./Notification/Notification.jsx";
import { Sidemenu } from "./sidemenu";
import './StyleSheet.css'
const Menu = () => {
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState();






const Menu = ()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
   
  
    return (
        <>
          {email ? (
            <div className="appMainContainer">
                <Sidemenu />
              <Routes>
                <Route path={"/home"} element={<Home />} />
                <Route path={"/home/AddBook"} element={<AddBook />} />
                <Route path={"/home/AddLesson"} element={<AddLesson />} />
                <Route path={"/home/AddQuestion"} element={<AddQuestion />} />
                <Route path={"/home/LessonPage"} element={<LessonPage />} />
                <Route path={"/OverView"} element={<OverView />} />
                <Route path={"/PaperReport"} element={<PaperReport />} />
                <Route path={"/Notification"} element={<Notification />} />
              </Routes>
            </div>
          ) : (
            <Routes>
<<<<<<< HEAD
                <Route path={'/signIn'} element={<Signin setEmail={setEmail} setPassword={setPassword}/>}/>
                <Route path={'/'} element={<SignUp setEmail={setEmail} setPassword={setPassword} />}/>
                
                <Route path={'/home'} element={<Home/>}/>

                <Route path={'/AddBook'} element={<AddBook/>}/>
                <Route path={'./ViewBooks'} element={<ViewBooks/>}/>
                <Route path={'./ReportBooks'} element={<ReportBooks/>}/>

                <Route path={'/AddLesson'} element={<AddLesson/>}/>
                <Route path={'./ViewLesson'} element={<ViewLesson/>}/>
                <Route path={'./ReportLesson'} element={<ReportLesson/>}/>
                
                <Route path={'/AddQuestion'} element={<AddQuestion/>}/>
                <Route path={'./ViewPaper'} element={<ViewPaper/>}/>
                <Route path={'./ReportPaper'} element={<ReportPaper/>}/>


                <Route path={'./ViewBooks'} element={<ViewBooks/>}/>
                <Route path={'./'}/>

             
            </Routes>
        </BrowserRouter>
=======
              <Route
                path={"/signIn"}
                element={
                  <Signin setEmail={setEmail} setPassword={setPassword} />
                }
              />
              <Route
                path={"/"}
                element={
                  <SignUp setEmail={setEmail} setPassword={setPassword} />
                }
              />
            </Routes>
          )}

          {/* <Route path={'/'} element={<SignUp/>}/>
                <Route path={'/'} element={<SignUp/>}/>
                <Route path={'/'} element={<SignUp/>}/> */}
>>>>>>> c19036b58fbad0c573d67ec172edb9f23a4da1d1
        </>
      </BrowserRouter>
    </>
  );
};
export default Menu;
