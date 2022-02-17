import React, { useState } from "react";
import "./AddLesson.css";
import logo from "./images/image.png";
import styled from "styled-components";
import Image from "./images/video.png";
import './StyleSheet.css'

export const AddLesson = () => {
  const Tab = styled.button`
    font-size: 20px;
    padding: 10px 60px;
    cursor: pointer;
    opacity: 0.6;
    background: white;
    border: 0;
    outline: 0;
    ${({ active }) =>
      active &&
      `
 border:2px solid #A1A1A1;
 border-bottom:none
 opacity:1;
 color:#4B7BE8;
 font-weight:600
  `}
  `;
  const ButtonGroup = styled.div`
    display: flex;
  `;
  const headers = ["Add", "View"];
  const [active, setActive] = useState(headers[0]);
  const [index, setIndex] = useState("Add");

  const HandleTap = (type) => {
    setActive(type);
    setIndex(type);
  };

  return (
    <div className="maincontent">
      <div>
        <h1>Lessons</h1>
        <div className="grey">
          <div className="Menu">
            <ButtonGroup>
              {headers.map((type) => (
                <Tab
                  key={type}
                  active={active === type}
                  onClick={() => HandleTap(type)}
                >
                  {type}
                </Tab>
              ))}
            </ButtonGroup>
          </div>
          {index === "Add" ? (
            <div className="Info">
              <table>
                <tr className="row">
                  <td className="First">Subject </td>
                  <td>
                    <select className="select"></select>
                  </td>
                </tr>
                <tr className="row">
                  <td className="First"> Grade </td>
                  <td>
                    <select className="select"></select>
                  </td>
                </tr>
                <tr className="row">
                  <td className="First"> Description</td>
                  <td>
                    <select className="select"></select>
                  </td>
                </tr>
                <tr className="row">
                  <td className="First">Subject </td>
                  <td>
                    <select className="select"></select>
                  </td>
                </tr>
                <tr className="row">
                  <td className="First"> Date </td>
                  <td>
                    <select className="select"></select>
                  </td>
                </tr>
                <tr className="row">
                  <td className="First">Upload Video </td>
                  <td>
                    <input className="file" type="file"></input>
                  </td>
                </tr>
                <tr className="row">
                  <td> </td>
                  <td>
                    <button type="button" className="Btn">
                      {" "}
                      Save
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          ) : (
            <div className="Info">
              <div className="rows">
                <div className="subject">
                  <h3>Physical Science</h3>
                  <li>LeahMlab</li>
                  <li>Grade 10</li>
                  <br />
                  <img src={Image} alt="" className=""></img>
                  <br />
                  <button className="btnView"> View more </button>
                </div>

                <div className="subject">
                  <h3>Physical Science</h3>
                  <li>LeahMlab</li>
                  <li>Grade 10</li>
                  <br />
                  <img src={Image} alt="" className=""></img>
                  <br />
                  <button className="btnView"> View more </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
