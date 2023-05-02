import { createSlice } from '@reduxjs/toolkit';
import { items } from '../ItemsCards/items';

const initialState = {
    lessons: items,
    user: localStorage.getItem('user'),
    loading: false,
    activeLesson: '/',
}

// local storage middleware

// export const authMiddleware = (store) => (next) => (action) => {
//     switch (action.type) {
//         case 'getCurrentUser/logout':
//             localStorage.removeItem('token');
//             localStorage.removeItem('isAuth');
//             localStorage.removeItem('userLogin');
//             break;
//         case 'getCurrentUser/login/fulfilled':
//             localStorage.setItem('token', action.payload.access_token);
//             localStorage.setItem('isAuth', true);
//             break;
//         case 'getCurrentUser/get/fulfilled':
//             localStorage.setItem('userLogin', action.payload.login);
//             break;
//         default:
//             break;
//     }
//     return next(action);
// };

// create slice

const cardsStore = createSlice({
    name: "cardsForUser",
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
    }
})

const { actions, reducer } = cardsStore;

export default reducer;

export const {
    isLoading,
    isNotLoading,
    setLesson
} = actions;