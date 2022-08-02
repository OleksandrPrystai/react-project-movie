import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    moviesPageNumber: 1,
    // films:[]
}

const moviesAddSlice = createSlice({
    name: 'moviesAddSlice',
    initialState,
    reducers: {
        inc: (state, action) => {
            ++state.moviesPageNumber
        },
        dec: (state, action) => {
            --state.moviesPageNumber
        },
        // getFilms:((state, action) => {
        //    state.films = [...state.films, ...action.payload]
        // })

    }
})

const {reducer: moviesAddReducer, actions: {inc, dec}} = moviesAddSlice;

const moviesAddAction = {
    inc, dec, // getFilms
}

export {moviesAddAction, moviesAddReducer}
