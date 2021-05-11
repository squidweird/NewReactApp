import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import "../Components/styles.css";
import Modal from "react-modal";
import Popup from "./popup"
import "../Components/popup.css"


export default function App() {
  const [Data, setData] = useState([]);
  const [modalIsopen, setmodalIsopen] = useState(false);
  const [modalId , setmodalId] = useState(1);
  const [modalData, setmodalData] = useState({
    "id": 1,
    "date": 1606311631,
    "title": "A Simple Guide to Design Thinking",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "thumbnail": {
      "large": "https://images.unsplash.com/photo-1454692173233-f4f34c12adad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      "small": "https://images.unsplash.com/photo-1454692173233-f4f34c12adad?ixlib=rb-1.2.1&auto=format&fit=crop&w=590&q=80"
    },
    "author": {
      "name": "John Doe",
      "avatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      "role": "Product Owner"
    }
  });
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
    setmodalId(id-1);
    const obj = Data[id-1];
    setmodalData(obj);
    setmodalIsopen(true);
    }

  

 

  return (
    <div>
      {Data.map((item) => {
        return (
          <div className="row">
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
        </div>)
      })}
      <Modal isOpen={modalIsopen}>
           <Popup 
            id={modalId}
            key={modalId}
            img={modalData.thumbnail.large}
            title={modalData.title}
            content={modalData.content}
            avatar={modalData.author.avatar}
            name={modalData.author.name}
            role={modalData.author.role}
            closeModal ={()=> setmodalIsopen(false)}
          />  
          </Modal> 
</div>
 
  ) 
}