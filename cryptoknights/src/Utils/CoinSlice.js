import { createSlice } from "@reduxjs/toolkit";

const CoinSlice = createSlice({
    name: 'coins',
    initialState:{
        coins:null,
        news:null,
    },
    reducers:{
        addCoins:(state, action) =>{
            state.coins=action.payload;
        },
        getNews:(state, action) =>{
            state.news=action.payload;
        },
    }
})

export const {addCoins, getNews} = CoinSlice.actions;

export default CoinSlice.reducer;