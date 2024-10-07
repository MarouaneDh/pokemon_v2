import { createSlice } from '@reduxjs/toolkit';
import { getAllPokemeons, getOnePokemeon } from './pokemonAsyncThunk';

const initialState = {
    Allpokemons: {
        isLoading: false,
        status: null,
        error: null,
        Allpokemons: null,
    },
    OnePokemon: {
        isLoading: false,
        status: null,
        error: null,
        OnePokemon: null,
    }
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get all pokemons
            .addCase(getAllPokemeons.pending, (state) => {
                state.Allpokemons.isLoading = true;
                state.Allpokemons.status = 'pending'
                state.Allpokemons.error = null
            })
            .addCase(getAllPokemeons.fulfilled, (state, action) => {
                state.Allpokemons.isLoading = false;
                state.Allpokemons.status = 'fulfilled'
                state.Allpokemons.Allpokemons = action.payload.results
            })
            .addCase(getAllPokemeons.rejected, (state, action) => {
                state.Allpokemons.isLoading = false;
                state.Allpokemons.status = 'rejected';
                state.Allpokemons.error = action.payload;
            })

            //get one pokemon
            .addCase(getOnePokemeon.pending, (state) => {
                state.OnePokemon.isLoading = true;
                state.OnePokemon.status = 'pending'
                state.OnePokemon.error = null
            })
            .addCase(getOnePokemeon.fulfilled, (state, action) => {
                state.OnePokemon.isLoading = false;
                state.OnePokemon.status = 'fulfilled'
                state.OnePokemon.OnePokemon = action.payload
            })
            .addCase(getOnePokemeon.rejected, (state, action) => {
                state.OnePokemon.isLoading = false;
                state.OnePokemon.status = 'rejected';
                state.OnePokemon.error = action.payload;
            })
    },
});

export default pokemonSlice.reducer;
