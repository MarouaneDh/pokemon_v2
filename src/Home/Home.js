import React from 'react'

import { Link } from 'react-router-dom';
import { pokemonGens } from '../staticData';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
                pokemonGens.map((gen) => {
                    return (
                        <Link key={gen.name} to={{ pathname: `/gen/${gen.first}/${gen.last}` }} className='gen_text'>{gen.name}</Link>
                    )
                })
            }
        </div>
    )
}

export default Home