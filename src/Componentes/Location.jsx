import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Characters from "./Characters";
import App from "../App.css"
import characterItem from "../assets/css/characterItem.css";
import favicon from "../assets/images/favicon.webp"

const Location = () => {
  const[isLoading, setIsLoading] = useState (true)
  const [location, setLocation] = useState({});
  const locationRandome = Math.floor(Math.random() * 125) + 1;
  const [typeId, setTypeId] = useState("");
  const [isShowCards, setIsShowCards] = useState(false);
  const [isInfoShowed, setIsInfoShowed] = useState(false);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${locationRandome}`)
      .then((res) => { setLocation(res.data);
      })
      .finally(() => setIsLoading(false));
  },[]);

  const searchType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${typeId}/`)
      .then((res) => setLocation(res.data));
    setIsShowCards(false);
    setIsInfoShowed(!isInfoShowed)
  };
  const showCards = () => {
    setIsShowCards(!isShowCards);
    // alert("si funciono")
  };
  console.log(location);
  return (
    <div className="general-container">
      {
        isLoading ? ( 
          <>
            <img className="loading-img" src={favicon} alt="sata" />
            <h1 className="loading-p">Loading...</h1>
          </>)
       
        :
        <>
      <section className="main-info-container">
        {isInfoShowed ? (
         
          <div className="input-container">
          <input
          className="input-search"
            placeholder="Type Name Dimension"
            type="text"
            value={typeId}
            onChange={(e) => setTypeId(e.target.value)}
          ></input>
          <button className="input-search btn up " onClick={searchType}>Click me</button>
        </div>
        ) : (
          <>
          <p className="main-title subtitle">{location.name}</p>
          <p className="subtitle">
            <strong>Dimension: </strong>
            {location.type}
          </p>
          <p className="subtitle">
            <strong>Type: </strong>
            {location.dimension}
          </p>
          <p className="main-sub subtitle">
            <strong>Population: </strong>
            {location.residents?.length}
          </p>
          <dvi>
          <button className="input-search btn " onClick={()=> setIsInfoShowed(!isInfoShowed)}>New Search</button>
          </dvi>
        </>
          
        )}
      </section>

      <section className="character-container">
        {isShowCards ? (
          <>
            <Characters location={location} />
            <button onClick={showCards} className="show-characters btn-up">
              <i className="fa-solid fa-angles-up "></i>
            </button>
          </>
        ) : (
          <button onClick={showCards} className="show-characters">
            <i className="fa-solid fa-angles-down"></i>
          </button>
        )}
      </section>
        </>
        }
    </div>
  );
};

export default Location;
