import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemeons } from '../redux/slices/pokemon/pokemonAsyncThunk'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCoverflow } from 'swiper/modules';
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
        <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center' }}>
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