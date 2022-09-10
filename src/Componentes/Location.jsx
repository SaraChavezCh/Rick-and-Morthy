import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Characters from "./Characters";
import characterItem from "../assets/css/characterItem.css";

const Location = () => {
  const [location, SetLocation] = useState({});
  const locationRandome = Math.floor(Math.random() * 125) + 1;
  const [typeId, setTypeId] = useState("");
  const [search, setSearch] = useState({});
  const [isShowCards, setIsShowCards] = useState(false);

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
  };
  const showCards = () => {
    setIsShowCards(!isShowCards);
    // alert("si funciono")
  };
  console.log(location);
  return (
    <div className="general-container">
      <section className="main-info-container">
        <h1>{location.name}</h1>
        <h2>
          <strong>Dimension:</strong>
          {location.dimension}
        </h2>
        <h3>
          <strong>Population:</strong>
          {location.residents?.length}
        </h3>
        <input
          type="text"
          value={typeId}
          onChange={(e) => setTypeId(e.target.value)}
        ></input>
        <button onClick={searchType}>Search</button>
      </section>

      <section className="character-container">
        {isShowCards ? (
            <>
          <Characters location={location} />
          <button onClick={showCards} className="show-characters top">
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
