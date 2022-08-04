import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {movieServices} from "../../services/movie-services";


const initialState ={
    movies:[],
    prev:null,
    next:null
};

const  getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page})=>{
        const {data} = await movieServices.getAll(page)
        return data
    }
    )







const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:(builder) =>
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                state.movies = action.payload;
                state.prev = action.payload.prev;
                state.next = action.payload.next;
            })


});

const {reducer:movieReducer} = movieSlice;

const movieActions ={
    getAll,



}

export {
    movieReducer,
    movieActions
}
