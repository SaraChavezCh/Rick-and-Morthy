import axios from 'axios';
import React from 'react';
import CharacterItem from './CharacterItem';
import characterItem from '../assets/css/characterItem.css';

const Characters = ({location}) => {

    return (
        
        <div className='allcards-container'>
            {
                location.residents?.map((resident) =>(
                    <CharacterItem 
                    key={resident}
                    resident={resident}/>
                    
                ))
            }
        </div>
    );
};

export default Characters;