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
import { ViewLesson } from "./viewLesson";
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
import { LessonPage } from "./LessonPage";
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
        </>
      </BrowserRouter>
    </>
  );
};
export default Menu;
