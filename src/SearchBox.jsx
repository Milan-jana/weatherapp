import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import { red } from '@mui/material/colors';



export default function SearchBox({updateInfo}){         //
    let [city, setCity] = useState("");
    let[error , setError]= useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather" ;
    const API_KEY = "a89f2c24a78a2ac4fb26c1200b3bec3e";

    // let getWeatherInfo= async()=>{
    //     let response= await fetch(`${API_URL}?q=${city} &appid={API_KEY}`);
    //     let jsonResponse = await response.json();
    //     console.log(jsonResponse);
    // };

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json(); // Fixed .json() syntax
            console.log(jsonResponse);
            let result={
                city: city,
                temp: jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelslike:jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
    
            };
            console.log(result);
            return result;                  //
        } catch (error) {
        //   console.error("Error fetching weather data:", error);
        // setError("NO such place in our API");
        throw error ;
        }
    };

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };

    let handleSubmit= async (evt)=>{            //
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();      //
            updateInfo(newInfo);                       //
        }catch(error){
            setError(true);
        }                                               
    };
    return(
        <div className="SearchBox">
            {/* <h3>Search for the weather</h3> */}
            <form onSubmit={handleSubmit} >
                <TextField 
                    id="city" 
                    label="city name" 
                    variant="outlined" 
                    required  
                    value={city}
                    onChange={handleChange}
                />
                <br></br><br></br> 
                <Button variant="contained" type="submit" >search</Button> 
                {error && <p style={{color:red}}>No such place exists! </p> }       
            </form>
        </div>
    );
}