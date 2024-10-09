import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './OnePokemon.css'

const OnePokemon = ({ pokemon }) => {
    const [onePokemon, setOnePokemon] = useState()

    useEffect(() => {
        const getOnePokemon = async (name) => {
            try {
                const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
                const response = await axios.get(URL);
                setOnePokemon(response.data)
            } catch (err) {
                console.error(err);
            }
        }
        getOnePokemon(pokemon?.name)
    }, [pokemon])

    return (
        onePokemon && <div className={`onePokemon ${onePokemon?.types[0]?.type?.name}`} style={{ backgroundImage: `url(${onePokemon?.sprites?.other?.home?.front_default})` }}>
            <span className='pokemon_name'>{onePokemon.name}</span>
        </div>
    )
}

export default OnePokemon