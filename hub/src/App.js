import React, {useEffect, useState} from "react";
import './App.css';
import Nav from "./components/nav";
import DailyPic from "./components/dailypic";
import MarsRoverImages from "./components/marsImages";

function App() {

  const [pic, setPic] = useState("");
  const [marsPics, setMarsPics] = useState([]);
  const [marsWeather, setMarsWeather] = useState("");

  const picOfDay = "https://api.nasa.gov/planetary/apod?api_key=GyZy1tC70NfISqhmiPheh2WCzmiARYOuS70JCKsZ";

  const dailyPic = async () => {
    const response = await fetch(picOfDay);
    const data = await response.json();
    setPic(data);
  }

  const marsRoverPics = async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const apiDate = `${year}-${month}-${day}`

    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${apiDate}&camera=fhaz&api_key=GyZy1tC70NfISqhmiPheh2WCzmiARYOuS70JCKsZ`)
    const data = await response.json();
    setMarsPics(data.photos, apiDate);
  }

  const marsWeatherData = async () => {
    const response = await fetch("https://api.nasa.gov/insight_weather/?api_key=GyZy1tC70NfISqhmiPheh2WCzmiARYOuS70JCKsZ&feedtype=json&ver=1.0");
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    dailyPic();
    marsRoverPics();
    marsWeatherData();
  }, [])

  return (
    <div className="App">
      <Nav />
      <div className="title">
        <h1>Space</h1>
      </div>  
      <DailyPic
        key={pic.date}
        url={pic.url}
        explanation={pic.explanation}
      />
      <div className="mars">
        <div className="subtitle">
          <h2>Mars:</h2>
          <hr />
        </div>
        <div className="subtitle">
          <h3>Mars Weather:</h3>
        </div>
        <div className="subtitle">
        <h3>Todays Mars Rover Images:</h3>
        </div>
        {marsPics.map(image => (
        <MarsRoverImages 
            key={image.key}
            url={image.img_src}
        />
        ))}
      </div>
    </div>
  );
}

export default App;