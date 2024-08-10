import { useEffect, useState } from "react";
import { Rapid_key } from "../Utils/constants";
import { useParams } from "react-router-dom";


const useCryptoHistory =() =>{
	const {coinId} = useParams();
	const key = Rapid_key
	const [priceHistory, setPriceHistory] = useState([]);
	const getPriceHistory =async()=>{
	const url = `https://coinranking1.p.rapidapi.com/coin/${coinId}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=1y`;
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
		setPriceHistory(result?.data?.history);
	} catch (error) {
		console.error(error);
	}
}
		useEffect(()=>{
			getPriceHistory();
		},[])
		return priceHistory
	}

export default useCryptoHistory