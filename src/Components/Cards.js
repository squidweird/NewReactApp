import React from "react";

function Cards(props) {
  function GetFormattedDate() {
    var todayTime = new Date();
    var month = todayTime.getMonth();
    var day = todayTime.getDate();
    var year = todayTime.getFullYear();
    return day + "/" + month + "/" + year;
  }

  var newd = GetFormattedDate();

  function handleClick(){
    props.onClick(props.id);
  }

  return (
    <div className="row">
      <div className="card">
        <img className="image-card"src={props.img} alt="" />
        <span className="dot-1"></span>
        <span className="dot-2"></span>
       
        <button onClick={handleClick}className="btn button">Learn more</button>
        
        <h2 className="card-heading">{props.heading}</h2>
        <p className="card-text">{props.text}</p>
        <p className="Author">
          {props.author}- {props.role}
          <span className="date">{newd}</span>
        </p>
      </div>
    </div>
  );
}

export default Cards;
