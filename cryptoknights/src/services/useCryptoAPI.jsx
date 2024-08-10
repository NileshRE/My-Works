import { useEffect } from "react";
import { addCoins } from "../Utils/CoinSlice";
import { useDispatch } from "react-redux";
import { Rapid_key } from "../Utils/constants";


const useCryptoAPI =(count) =>{
	const dispatch = useDispatch();
	const key = Rapid_key

	const getCoins =async()=>{
	const url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${count}&offset=0`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': key,
			'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		const stat = result?.data;
		dispatch(addCoins(stat))
	} catch (error) {
		console.error(error);
	}
}
		useEffect(()=>{
			getCoins();
		},[])
	}

export default useCryptoAPI