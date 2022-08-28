import React, {useEffect, useState} from "react";
import Nav from "./components/nav";
import DailyPic from "./components/dailypic";
import Article from "./components/article";
import MarsWeatherToday from "./components/marsWeatherToday";
import MarsWeatherWeek from "./components/marsWeatherWeek"
import MarsRoverImages from "./components/marsImages";
import e from "connect-flash";

function App() {

  const [pic, setPic] = useState("");
  const [articles, setArticles] = useState([]);
  const [marsTemp, setMarsTemp] = useState([]); 
  const [marsTempWeek, setMarsTempWeek] = useState([]);
  const [marsPics, setMarsPics] = useState([]);

  const picOfDay = "https://api.nasa.gov/planetary/apod?api_key=GyZy1tC70NfISqhmiPheh2WCzmiARYOuS70JCKsZ";

  const dailyPic = async () => {
    const response = await fetch(picOfDay);
    const data = await response.json();
    setPic(data);
  }

  const news = async () => {
    const response =  await fetch("https://api.spaceflightnewsapi.net/v3/articles");
    const data = await response.json();
    setArticles(data);
  }

  const marsWeather = async () => {
    const response = await fetch("https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0");
    const data = await response.json();
    const temp = Object.entries(data);
    const today = temp[0][1].AT.av
    setMarsTemp(today);
    setMarsTempWeek(Object.values(data));
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
    marsWeather();
    marsRoverPics();
  }, [])

  return (
    <div className="App">
      <div className="title">
        <div className="overlay"></div>
        <h1>Space</h1>
      </div>
      <Nav />
      <DailyPic
        key={pic.date}
        url={pic.url}
        explanation={pic.explanation}
        type={pic.media_type}
      />
      <div className="anchor" id="latest-news"></div>
      <div className="subtitle">
          <h2>Latest News:</h2>
      </div>
      <hr />
      <div className="news">
        {articles.map(article => (
          <Article
            key={article.id}
            link={article.url}
            headline={article.title}
            imageLink={article.imageUrl}
          />
        ))}
      </div>
      <div className="anchor" id="mars-photos"></div>
      <div className="mars">
        <div className="subtitle">
            <h2>Mars:</h2>
        </div>
        <hr />
        <div className="mars-subtitle">
          <h3>The Weather on Mars</h3>
        </div>
        <MarsWeatherToday 
          temp={marsTemp}
        />
        <h3>This Week:</h3>
        {marsTempWeek.map(temps => (
          <MarsWeatherWeek 
            temp={Object.values(temps)[0].av}
          /> 
        ))}
        <div className="mars-subtitle">
          <h3>Todays Mars Rover Images:</h3>
        </div>
        {marsPics.map(image => (
            <MarsRoverImages 
                key={image.id}
                url={image.img_src}
            />
          ))}
        </div>
    </div>
  );
}

export default App;