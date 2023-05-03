import {configureStore} from '@reduxjs/toolkit';
import cardsStore from './slices/cardsSlice';


const store = configureStore({
    reducer: { 
        cardsStore
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: true
});


export default store;