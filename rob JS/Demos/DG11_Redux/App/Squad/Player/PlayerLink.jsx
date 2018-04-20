import React from 'react';
import { Link } from 'react-router-dom';

const PlayerLinks = ( {squad} ) => {
    return (
        <ul>
            {squad.map(player => 
                <li key={player.id}>
                    <Link to={`/squad/${player.id}`}>{player.name}</Link>
                </li>
            )}
        </ul>
    )
}

export default PlayerLinks;