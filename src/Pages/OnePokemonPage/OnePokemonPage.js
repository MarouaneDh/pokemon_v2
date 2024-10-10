import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getOnePokemeon } from '../../redux/slices/pokemon/pokemonAsyncThunk'
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

import './OnePokemonPage.css'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const OnePokemonPage = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const OnePokemon = useSelector((state) => state.pokemon.OnePokemon.OnePokemon)

    useEffect(() => {
        if (params) {
            dispatch(getOnePokemeon(params.id));
        }
    }, [dispatch, params])

    const handleManualPlay = () => {
        if (OnePokemon?.cries?.latest) {
            const audio = new Audio(OnePokemon.cries.latest);
            audio.play();
        }
    };

    let statis = []
    let statVals = []

    OnePokemon?.stats && OnePokemon?.stats.map(stat => {
        const name = stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1);
        return statis.push(name.replace('Special', 'Sp'))
    })
    OnePokemon?.stats && OnePokemon?.stats.map(stat => (statVals.push(stat.base_stat)))

    const radarData = {
        labels: statis,
        datasets: [
            {
                label: 'Stats',
                data: statVals,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
                fill: true,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#fff',
            },
        ],
    };

    const options = {
        scales: {
            r: {
                angleLines: {
                    color: 'gray'
                },
                grid: {
                    color: 'gray'
                },
                ticks: {
                    display: false
                },
                suggestedMin: 0,
                pointLabels: {
                    display: true,
                    color: '#fff',
                    font: {
                        size: 16,
                    }
                }
            }
        },
        scale: {
            ticks: { beginAtZero: false },
        },
        plugins: {
            legend: {
                display: false,
            },
        }
    };

    return (
        OnePokemon &&
        <div>
            <div className='pokemon'>
                <span className='pokemon_page_pokemon_name'>{OnePokemon.name}</span>
                <img onClick={handleManualPlay} className='pokemon_page_pokemon_image' src={OnePokemon.sprites.other['official-artwork'].front_default} alt={OnePokemon.name} />
            </div>
            <Radar className='chart' data={radarData} options={options} />
        </div>
    )
}

export default OnePokemonPage
