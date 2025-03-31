import SearchBox from "./SearchBox";
import InfoBox from './InfoBox';
import { useState } from "react";
import { red } from "@mui/material/colors";


export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "BBSR",       //obj create
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        feelslike:24.84,
        weather:"haze",

    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);                   //
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2 style={{color:"black"}}>
                Weather App
            </h2>
            <SearchBox updateInfo={updateInfo} />    **Milu**
            <InfoBox info={weatherInfo} />
        </div>
    );
}