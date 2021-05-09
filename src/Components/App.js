import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import "../Components/styles.css"
import Popup from "../Components/popup";

export default function App() {
  const [Data, setData] = useState([]);
  // const [popupID, setpopupID] =useState(0); couldnt use them for popup 
  // const [isTrue, setisTrue] = useState(true);
  const gitHubUrl =
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";
  const getGiHubUserWithAxios = async () => {
    const response = await axios.get(gitHubUrl);
    setData(response.data);
  };

  useEffect(() => {
    getGiHubUserWithAxios();
  }, []);

  function changeComponent(id){
  console.log("changed")
  }

 

  return (
    <div className="row">
      {Data.map((item) => {
        return (
          <Cards
            key={item.id}
            id={item.id}
            img={item.thumbnail.small}
            heading={item.title}
            text={item.content}
            author={item.author.name}
            role={item.author.role}
            onClick={changeComponent}
          />
        ) 
      })}

    </div>
  ) 
}

//tried to render this popup by using a state variable isTrue, Popup gets created from each and every card on screen , yet to figure out how to conditionaaly rebder a single popup using the id and eventlistener.//
{/* <Popup
img={item.thumbnail.large}
title={item.title}
content={item.content}
avatar={item.author.avatar}
name={item.author.name}
role={item.author.role}
/> */}