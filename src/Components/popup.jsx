import React from 'react';
import "../Components/popup.css"

function Popup(props){
    return(
        <div className="container">
        <img className="container" src={props.img} alt=""/>
        <h2 className="container">{props.title}</h2>
        <p className="container">{props.content}</p>
        <img className="container" src={props.avatar} alt="" />
        <p className="container" >{props.name} {props.role}</p>
        </div>
    )
}

export default Popup;