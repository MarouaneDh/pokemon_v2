import { configureStore } from '@reduxjs/toolkit';

import pokemon from './slices/pokemon/pokemonSlice';

export const store = configureStore({
    reducer: {
        pokemon
    },
});
