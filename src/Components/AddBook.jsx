import React, { useState } from "react";
import "./AddBook.css";
import logo from "./images/image.png";
import styled from "styled-components";


export const AddBook = () => {
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
  const headers = ["Add", "View", "Report"];
  const [active, setActive] = useState(headers[0]);
  const [index, setIndex] = useState("Add");

  const HandleTap = (type) => {
    setActive(type);
    setIndex(type);
  };

  return (
    <div className="maincontent">
      <div className="username2">
        <p>Hi,Username</p>
        <i className="fa fa-user-circle fa-2x"></i>
        <div className="icon">
          <i className="fa fa-bell"></i>
        </div>
      </div>
      <div>
        <h1>Books</h1>
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
            <div className="Info"></div>
          )}
        </div>
      </div>
    </div>
  );
};
