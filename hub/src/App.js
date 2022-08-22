import React, {useEffect, useState} from "react";
import axios from "axios";
import cheerio from "cheerio";
import './App.css';
import Nav from "./components/nav";
import DailyPic from "./components/dailypic";
import MarsRoverImages from "./components/marsImages";

function App() {

  const [pic, setPic] = useState("");
  const [marsPics, setMarsPics] = useState([]);

  const picOfDay = "https://api.nasa.gov/planetary/apod?api_key=GyZy1tC70NfISqhmiPheh2WCzmiARYOuS70JCKsZ";

  const dailyPic = async () => {
    const response = await fetch(picOfDay);
    const data = await response.json();
    setPic(data);
  }

  const news = async () => {
    const url = "https://www.nasa.gov/"
    const {data} = await axios.get(url);
    const headline = {headline: "", link: ""};
    const $ = await cheerio.load(data);
    const text = $("div#main")
    console.log(data);
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

  useEffect(() => {
    dailyPic();
    news();
    marsRoverPics();
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
      <div className="news">
        <h2 id="news">Latest News:</h2>
      </div>
      <hr />
      <div className="mars">
        <div className="subtitle">
          <h2 id="mars">Mars:</h2>
          <hr />
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