import { createSlice } from '@reduxjs/toolkit';
import { items } from '../ItemsCards/items';

const initialState = {
    lessons: items,
    user: localStorage.getItem('user'),
    loading: false,
    activeLesson: '/',
    cardsInLesson: 0,
}

// local storage middleware

// export const itemsMiddleware = (store) => (next) => (action) => {
//     switch (action.type) {
//         case 'lessons/setLocal':
//             localStorage.setItem('items', action.payload);
//             break;
//         default:
//             break;
//     }
//     return next(action);
// };

// create slice

const cardsStore = createSlice({
    name: 'lessons',
    initialState,
    reducers: {
        isLoading: (state) => {
            state.loading = true;
        },
        isNotLoading: (state) => {
            state.loading = false;
        },
        setLesson: (state, action) => {
            state.activeLesson = action.payload;
        },
        setLocal: (state, action) => {
            state.user = 'current user';
        },
        setCardsInLesson: (state, action) => {
            state.cardsInLesson = action.payload;
        },
    }
})

const { actions, reducer } = cardsStore;

export default reducer;

export const {
    isLoading,
    isNotLoading,
    setLesson,
    setLocal,
    setCardsInLesson,
} = actions;