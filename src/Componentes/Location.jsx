import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Characters from "./Characters";
import App from "../App.css"
import characterItem from "../assets/css/characterItem.css";

const Location = () => {
  const [location, SetLocation] = useState({});
  const locationRandome = Math.floor(Math.random() * 125) + 1;
  const [typeId, setTypeId] = useState("");
  const [search, setSearch] = useState({});
  const [isShowCards, setIsShowCards] = useState(false);
  const [isInfoShowed, setIsInfoShowed] = useState(false);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${locationRandome}`)
      .then((res) => SetLocation(res.data));
  }, []);

  const searchType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${typeId}/`)
      .then((res) => SetLocation(res.data));
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
      <section className="main-info-container">
        {isInfoShowed ? (
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
        ) : (
          <div className="input-container">
            <input
            className="input-search"
              autoFocus={Location}
              placeholder="Type Name Dimension"
              type="text"
              value={typeId}
              onChange={(e) => setTypeId(e.target.value)}
            ></input>
            <button className="input-search btn " onClick={searchType}>Click me</button>
          </div>
        )}
      </section>

      <section className="character-container">
        {isShowCards ? (
          <>
            <Characters location={location} />
            <button onClick={showCards} className="show-characters">
              <i class="fa-solid fa-angles-up "></i>
            </button>
          </>
        ) : (
          <button onClick={showCards} className="show-characters">
            <i class="fa-solid fa-angles-down"></i>
          </button>
        )}
      </section>
    </div>
  );
};

export default Location;
