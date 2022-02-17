import React, { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

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






const Menu = ()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
   
  
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/signIn'} element={<Signin setEmail={setEmail} setPassword={setPassword}/>}/>
                <Route path={'/'} element={<SignUp setEmail={setEmail} setPassword={setPassword} />}/>
                
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/AddBook'} element={<AddBook/>}/>
                <Route path={'/AddLesson'} element={<AddLesson/>}/>
                <Route path={'/AddQuestion'} element={<AddQuestion/>}/>
                <Route path={'/LessonPage'} element={<LessonPage/>}/>
                <Route path={'./ViewBooks'} element={<ViewBooks/>}/>

                {/* <Route path={'/'} element={<SignUp/>}/>
                <Route path={'/'} element={<SignUp/>}/>
                <Route path={'/'} element={<SignUp/>}/> */}
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default Menu