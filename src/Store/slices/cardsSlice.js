import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiSupaBase } from '../../services/api';

const initialState = {
    cards: [],
    apiInfo: null,
    lessonsTitles: {},
    cardsInLesson: 0,
    lessonMode: 'idle',
    loading: false,
    apiError: null,
}


export const getCardsThunk = createAsyncThunk(
    'getCards/get',
    (category) => {
        return apiSupaBase(category);
    }
);
export const getLessonsTitlesThunk = createAsyncThunk(
    'getLessonsTitles/get',
    (category) => {
        return  apiSupaBase(category);
    }
);



// create slice

const cardsSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {
        isLoading: (state) => {
            state.loading = true;
        },
        setCardsInLesson: (state, action) => {
            state.cardsInLesson = action.payload;
        },
        setLessonMode: (state, action) => {
            state.lessonMode = action.payload;
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
                state.cardsInLesson = action.payload.data?.length;

            })
            .addCase(getCardsThunk.rejected, (state)=>{
                state.loading = false;
            })
            // lessons title
            .addCase(getLessonsTitlesThunk.pending, (state)=>{
                state.loading = true;
            })
            .addCase(getLessonsTitlesThunk.fulfilled, (state, action)=>{
                state.loading = false;
                state.apiError = action.payload?.error;
                state.lessonsTitles = action.payload?.data?.definitions;

            })
            .addCase(getLessonsTitlesThunk.rejected, (state, action)=>{
                state.loading = false;
                state.apiError = action.payload?.error;

            })
            // default
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = cardsSlice;

export default reducer;

export const {
    isLoading,
    setCardsInLesson,
    setLessonMode,
} = actions;