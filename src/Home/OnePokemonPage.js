import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOnePokemeon } from '../redux/slices/pokemon/pokemonAsyncThunk'

const OnePokemonPage = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const OnePokemon = useSelector((state) => state.pokemon.OnePokemon.OnePokemon)

    useEffect(() => {
        if (params) {
            dispatch(getOnePokemeon(params.id));
        }
    }, [dispatch, params])

    console.log(OnePokemon)

    const handleManualPlay = () => {
        if (OnePokemon?.cries?.latest) {
            const audio = new Audio(OnePokemon.cries.latest);
            audio.play();
        }
    };

    return (
        <div>
            <img onClick={handleManualPlay} style={{ width: '100px' }} src={OnePokemon?.sprites?.other?.['official-artwork']?.front_default} alt={OnePokemon?.name} />
        </div>
    )
}

export default OnePokemonPage