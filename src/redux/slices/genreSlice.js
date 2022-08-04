import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreServices} from "../../services/genre-services";
import {movieServices} from "../../services/movie-services";
const initialState = {
    genre:[],
    errors:null,
    prev:null,
    next:null

};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await genreServices.getAll();
            return data
        }catch (e){
            return  rejectWithValue(e.response.data)
        }
    }
);

const  setGenre = createAsyncThunk(
    'movieSlice/setGenre',
    async ({id,page})=>{
        const {data} = await genreServices.setGenre(id,page)
        return data
    }
)



const genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers:(builder )=>
    {
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                state.errors = null
                state.genre = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })
            .addCase(setGenre.fulfilled,(state, action) => {
                state.genre = action.payload;
                state.prev = action.payload.prev;
                state.next = action.payload.next;
            })

    }
});

const {reducer:genreReducer} = genreSlice;

const genreActions ={
    getAll,
    setGenre

}
export {
    genreReducer,genreActions
}