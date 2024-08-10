import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from './CoinSlice'

const Appstore = configureStore({
    reducer:{
        coins: coinsReducer,
    },
});


export default Appstore