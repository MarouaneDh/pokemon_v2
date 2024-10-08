import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemeons } from '../redux/slices/pokemon/pokemonAsyncThunk'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCoverflow } from 'swiper/modules';
import OnePokemon from './OnePokemon/OnePokemon';
import { Link, useParams } from 'react-router-dom';
import OnePokemonSquare from './OneSquarePokemon/OnePokemonSquare';

const OneGenPage = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const Allpokemons = useSelector((state) => state.pokemon.Allpokemons.Allpokemons)

    const [isViewSwiper, setIsViewSwiper] = useState(false)

    const toggleView = () => {
        setIsViewSwiper(!isViewSwiper)
    }

    useEffect(() => {
        if (params) {
            dispatch(getAllPokemeons({
                limit: params.last - params.first + 1,
                offset: params.first - 1
            }));
        }
    }, [dispatch, params])

    return (
        <div className='one_gen_container'>
            <button onClick={toggleView}>Change view</button>
            {
                isViewSwiper ?
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow]}
                        className="mySwiper"
                    >
                        {
                            Allpokemons && Allpokemons?.map((pokemon) => {
                                return (
                                    <SwiperSlide key={pokemon.name}>
                                        <Link style={{ textDecoration: 'none' }} to={{ pathname: `/pokemon/${pokemon.name}` }}>
                                            <OnePokemon pokemon={pokemon} key={pokemon.name} />
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper> :
                    <div className='square_pokemons_container'>
                        {
                            Allpokemons && Allpokemons?.map((pokemon) => {
                                return (
                                    <OnePokemonSquare key={pokemon.name} pokemon={pokemon} />
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}

export default OneGenPage