import {configureStore} from '@reduxjs/toolkit';
import cardsSlice from './slices/cardsSlice';
import themeSlice from './slices/themeSlice';
import audioSlice from './slices/playAudioSlice';
import { setThemeToLocal } from './slices/themeSlice';


const store = configureStore({
    reducer: { 
        cardsSlice,
        themeSlice,
        audioSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(setThemeToLocal),
    devTools: process.env.NODE_ENV === 'development'
});


export default store;