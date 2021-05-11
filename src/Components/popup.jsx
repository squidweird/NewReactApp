import React from 'react';
import "../Components/popup.css"

function Popup(props){
    return(
        <div className="container-popup">
        <button className="popup-button" onClick={props.closeModal}> Close
        </button>
        <img className="popup-img" src={props.img} alt=""/>
        <h2 className="popup-title">{props.title}</h2>
        <p className="popup-content">{props.content}</p>
        <img className="popup-avatar" src={props.avatar} alt="" />
        <p className="popup-name" >{props.name} {props.role}</p>
        </div>
    
    )
}

export default Popup;