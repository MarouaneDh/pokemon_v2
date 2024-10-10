import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

import './OneSquarePokemon.css'

const OnePokemonSquare = ({ pokemon }) => {
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
        onePokemon &&
        <Link style={{ textDecoration: 'none' }} to={{ pathname: `/pokemon/${onePokemon.name}` }}>
            <div className={`one_square_pokemon  ${onePokemon?.types[0]?.type?.name}`}>
                <span className='one_square_pokemon_number'>{onePokemon.id}#</span>
                <span className='one_square_pokemon_name'>{onePokemon.name}</span>
                <img className={onePokemon?.sprites?.other?.showdown?.front_default ? 'one_square_pokemon_gif' : 'one_square_pokemon_image'} src={onePokemon?.sprites?.other?.showdown?.front_default ? onePokemon?.sprites?.other?.showdown?.front_default : onePokemon?.sprites?.other?.home?.front_default} alt={onePokemon.name} />
            </div>
        </Link>
    )
}

export default OnePokemonSquare