import { useEffect } from "react";
import { getNews } from "../Utils/CoinSlice";
import { useDispatch } from "react-redux";
import { Rapid_key } from "../Utils/constants";


const useCryptoNewsAPI =(count)=>{
    const dispatch = useDispatch();
    const key = Rapid_key

    const getCryptoNews=async()=>{
    const url = `https://crypto-news16.p.rapidapi.com/news/top/${count}`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': key,
		'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    dispatch(getNews(result))
} catch (error) {
	console.error(error);
}
    }

    useEffect(()=>{
      getCryptoNews();
    },[])
}
    export default useCryptoNewsAPI