import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import Characters from './Characters';

const Location = () => {
    const [location, SetLocation] = useState({})
    const locationRandome = Math.floor(Math.random()* 125)+1
    const [typeId, setTypeId] = useState("")

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${locationRandome}`)
        .then(res => SetLocation(res.data))
    },[])

    const searchType = ()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${typeId}/`)
        .then(res=> SetLocation(res.data))
    }
    console.log(location);
    return (
        <div>
            <h1>{location.name}</h1>
            <input 
            type="text" 
            value={typeId} 
            onChange={ e=> setTypeId (e.target.value)}></input>
            <button onClick={searchType}>Search</button>
            <Characters location={location}/>
        </div>
    );
};

export default Location;