import { useEffect, useState } from "react";
import { Rapid_key } from "../Utils/constants";


const useExchange=()=>{
    const key = Rapid_key
    const [exchanges, setExchanges] = useState([]);

    const getExchanges=async()=>{
    const url = 'https://coingecko.p.rapidapi.com/exchanges';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': key,
		'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setExchanges(result);
} catch (error) {
	console.error(error);
}
    }
     useEffect(()=>{
        getExchanges();
     },[])
     return exchanges
}

export default useExchange