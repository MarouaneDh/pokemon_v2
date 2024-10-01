import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllPokemeons = createAsyncThunk(
    'pokemon/getAllPokemeons',
    async ({ limit, offset }, { fulfillWithValue, rejectWithValue }) => {
        try {
            const URL = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
            const response = await axios.get(URL);
            return fulfillWithValue(response.data);
        } catch (err) {
            console.error(err);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

export const getOnePokemeon = createAsyncThunk(
    'pokemon/getOnePokemeon',
    async (id, { fulfillWithValue, rejectWithValue }) => {
        try {
            const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const response = await axios.get(URL);
            return fulfillWithValue(response.data);
        } catch (err) {
            console.error(err);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);
