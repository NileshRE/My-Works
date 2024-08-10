import React, {useState} from "react";
import { WeatherApi } from "./Hooks/WeatherApi";
import './App.css'


const App=()=>{
    const[query, setQuery] = useState('');
    const [weatdata, setWeatData] = useState({});

    const search= async(e)=>{
        if(e.key==='Enter'){
            const data = await WeatherApi(query)
            setWeatData(data);
            setQuery('');
        }
    }

    return(
        <div className="main-container">
            <input type="text" className="search" placeholder="Search..." value={query} onChange={(e)=> setQuery(e.target.value)}
            onKeyDown={search}
            />
            {weatdata.main&&(
                <div className="city">
                    <h2 className="city-name">
                        <span>{weatdata.name}</span>
                        <sup>{weatdata.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weatdata.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weatdata.weather[0].icon}@2x.png`} alt={weatdata.weather[0].description}/>
                        <p>{weatdata.weather[0].description}</p>
                        </div>
                </div>
            )}
        </div>
    )
}

export default App