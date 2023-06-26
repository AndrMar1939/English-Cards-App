import { createSlice } from '@reduxjs/toolkit';

const isDark = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = isDark ? 'dark' : 'light';
const initialState = {
    theme: localStorage.getItem('theme') || initialTheme,
}

// middle ware save theme to the local storage
export const setThemeToLocal = (store) => (next) => (action) => {
    switch (action.type) {
        case 'theme/setDarkTheme':
            localStorage.setItem('theme', 'dark')
            break;
        case 'theme/setLightTheme':
            localStorage.setItem('theme', 'light')
            break;
        default:
            break;
    }
    return next(action);
};

// slice
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setDarkTheme: (state) => {
            state.theme = 'dark';
        },
        setLightTheme: (state) => {
            state.theme = 'light';
        },
    }
})

const { actions, reducer } = themeSlice;

export default reducer;

export const {
    setDarkTheme,
    setLightTheme,
} = actions;