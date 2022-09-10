import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import characterItem from '../assets/css/characterItem.css';

const CharacterItem = ({resident}) => {

    const [showResident, setShowResident] = useState({})
    
    useEffect(()=>{
        axios.get(resident)
        .then( (res) => setShowResident(res.data))
    },[])
    console.log(showResident);
    return (
        <div className='card-container'>
            <img className='card-img' src={showResident.image} alt="character´s image" />
             <li className='card-item-name'><strong>{showResident.name}</strong></li>
            <ul className='card-item-list'>
                <li className='card-item'><strong>Status:</strong> {showResident.status}</li>
                <li className='card-item'><strong>Specie:</strong> {showResident.species}</li>
                <li className='card-item'><strong>Gender:</strong> {showResident.gender}</li>
                <li className='card-item'><strong>Origin:</strong><br></br>  {showResident.origin?.name}</li>
                <li className='card-item'><strong>Episode:</strong> {(showResident.episode?.length)}</li>
            </ul>
        </div>
    );
};

export default CharacterItem;