import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddBook } from "./AddBook";
import { AddLesson } from "./AddLesson";
import { AddQuestion } from "./AddQuestion";
import { Home } from "./home";
import { LessonPage } from "./LessonPage";
import { OverView } from "./OverView";
import { Signin } from "./signIn";
import { SignUp } from "./signUp";
import Notification from "./Notification/Notification.jsx";
import { Sidemenu } from "./sidemenu";
import './StyleSheet.css'

const Menu = () => {
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState();

  return (
    <>
      <BrowserRouter>
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
