import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CharacterItem = ({resident}) => {

    const [showResident, setShowResident] = useState({})
    
    useEffect(()=>{
        axios.get(resident)
        .then( (res) => setShowResident(res.data))
    },[])
    console.log(showResident);
    return (
        <div>
            
            <img src={showResident.image} alt="character´s image" />
            <li><strong>Name:</strong> {showResident.name} </li>
            <li><strong>Status:</strong> {showResident.status}</li>
            <li><strong>Specie:</strong> {showResident.species}</li>
            <li><strong>Gender:</strong> {showResident.gender}</li>
        </div>
    );
};

export default CharacterItem;