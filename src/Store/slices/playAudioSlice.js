import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    playAudio: false,
}


// slice
const audioSlice = createSlice({
    name: 'playAudio',
    initialState,
    reducers: {
        startedPlay: (state) => {
            state.playAudio = true;
        },
        endedPlay: (state) => {
            state.playAudio = false;
        },
    }
})

const { actions, reducer } = audioSlice;

export default reducer;

export const {
    startedPlay,
    endedPlay,
} = actions;