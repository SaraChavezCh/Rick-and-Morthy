import axios from 'axios';
import React from 'react';
import CharacterItem from './CharacterItem';

const Characters = ({location}) => {

    return (
        <div>
            <ul>
            {
                location.residents?.map((resident) =>(
                    <CharacterItem 
                    key={resident}
                    resident={resident}/>
                    
                ))
            }
            </ul>
        </div>
    );
};

export default Characters;