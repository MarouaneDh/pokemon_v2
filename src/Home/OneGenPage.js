import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemeons } from '../redux/slices/pokemon/pokemonAsyncThunk'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import OnePokemon from './OnePokemon';
import { useParams } from 'react-router-dom';

const OneGenPage = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const Allpokemons = useSelector((state) => state.pokemon.Allpokemons.Allpokemons)

    useEffect(() => {
        if (params) {
            dispatch(getAllPokemeons({
                limit: params.last - params.first + 1,
                offset: params.first - 1
            }));
        }
    }, [dispatch, params])

    return (
        <div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {
                    Allpokemons && Allpokemons?.map((pokemon, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <OnePokemon pokemon={pokemon} key={index} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default OneGenPage