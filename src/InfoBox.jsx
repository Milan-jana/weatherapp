import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function Infobox({info}){
    // const INIT_URL = "https://images.unsplash.com/photo-1575214997383-a3592741c334?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let COLD_URL ="https://images.unsplash.com/photo-1486284847143-bfb9308a3f17?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL ="https://images.unsplash.com/photo-1431727499043-70167d3d8c90?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1518803194621-27188ba362c9?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // let info= {
    //     city: "Delhi",       //obj create
    //     temp:25.05,
    //     tempMin:25.05,
    //     tempMax:25.05,
    //     humidity:47,
    //     feelslike:24.84,
    //     weather:"haze",

    // }
    return(
        <div className="InfoBox">
            {/* <h1>WeatherInfo-{info.weather} </h1> */}
            <div className="cardContainer" >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    {info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
                    </Typography>
                    {/* <Typography variant="body2" sx={{ color: 'text.secondary' component={"span"} }}>
                        <div>
                        <P>Temperature= {info.temp}&deg;C </P>
                        <P>Humidity= {info.humidity} </P>
                        <P>Min Temp= {info.tempMin}&deg;C </P>
                        <P>Max Temp= {info.tempMax}&deg;C </P>
                        </div>
                    </Typography> */}
                     <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
                        <div>
                            <p>Temperature: {info.temp}&deg;C </p>
                            <p>Humidity: {info.humidity} </p>
                            <p>Min Temp: {info.tempMin}&deg;C </p>
                            <p>Max Temp: {info.tempMax}&deg;C </p>
                            <p>The weather can be describe as <i>{info.weather}</i> and feels like
                               {info.feelslike}&deg;C
                            </p>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}





// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

// export default function Infobox() {
//   const INIT_URL =
//     "https://images.unsplash.com/photo-1575214997383-a3592741c334?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//   let info = {
//     city: "Delhi", // Object with weather details
//     temp: 25.05,
//     tempMin: 25.05,
//     tempMax: 25.05,
//     humidity: 47,
//     feelslike: 24.84,
//     weather: "haze",
//   };

//   return (
//     <div className="InfoBox">
//       <h1>Weather Info - {info.weather} </h1>
//       <div className="cardContainer">
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia sx={{ height: 140 }} image={INIT_URL} title="Weather" />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {info.city}
//             </Typography>
//             <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
//               <div>
//                 <p>Temperature: {info.temp}&deg;C </p>
//                 <p>Humidity: {info.humidity} </p>
//                 <p>Min Temp: {info.tempMin}&deg;C </p>
//                 <p>Max Temp: {info.tempMax}&deg;C </p>
//               </div>
//             </Typography>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
