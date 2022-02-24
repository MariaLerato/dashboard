import React from 'react'


const Card = ({subject,name,image ,grade}) => {
  return (
    <div className="subject">
    <h3>{subject}</h3>
    <li>{name}</li>
    <li>{`Grade ${grade}`}</li>
    <br />
    <img src={image} alt="" className=""></img>
    <br />
    <button className="btnView"> View more </button>
  </div>
  )
}

export default Card