import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiSupaBase } from '../../services/api';

const initialState = {
    cards: [],
    apiInfo: null,
    lessonsTitles: {},
    cardsInLesson: 0,
    loading: false,
    apiError: null,
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

// thunk


export const getCardsThunk = createAsyncThunk(
    'getCards/get',
    (category) => {
        return apiSupaBase(category);
    }
);
export const getApiInfoThunk = createAsyncThunk(
    'getApiInfo/get',
    (category) => {
        return  apiSupaBase(category);
    }
);
export const getLessonsTitlesThunk = createAsyncThunk(
    'getLessonsTitles/get',
    (category) => {
        return  apiSupaBase(category);
    }
);



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
        setCardsInLesson: (state, action) => {
            state.cardsInLesson = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // cards
            .addCase(getCardsThunk.pending, (state)=>{
                state.loading = true;
            })
            .addCase(getCardsThunk.fulfilled, (state, action)=>{
                state.loading = false;
                state.apiError = action.payload.error;
                state.cards = action.payload.data;
                state.cardsInLesson = action.payload.data.length;

            })
            .addCase(getCardsThunk.rejected, (state)=>{
                state.loading = false;
            })
            // api info
            .addCase(getApiInfoThunk.pending, (state)=>{
                state.loading = true;
            })
            .addCase(getApiInfoThunk.fulfilled, (state, action)=>{
                state.loading = false;
                state.apiError = action.payload.error;
                state.apiInfo = action.payload.data;

            })
            .addCase(getApiInfoThunk.rejected, (state)=>{
                state.loading = false;

            })
            // lessons title
            .addCase(getLessonsTitlesThunk.pending, (state)=>{
                state.loading = true;
            })
            .addCase(getLessonsTitlesThunk.fulfilled, (state, action)=>{
                state.loading = false;
                state.apiError = action.payload.error;
                state.lessonsTitles = action.payload.data.definitions;

            })
            .addCase(getLessonsTitlesThunk.rejected, (state)=>{
                state.loading = false;

            })
            // default
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = cardsStore;

export default reducer;

export const {
    isLoading,
    isNotLoading,
    setCardsInLesson,
} = actions;