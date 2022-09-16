import React, {useEffect, useState} from "react";
import Nav from "./components/nav";
import DailyPic from "./components/dailypic";
import Article from "./components/article";
import MarsWeatherToday from "./components/marsWeatherToday";
import MarsRoverImages from "./components/marsImages";
import axios from "axios";


function App() {

  const [pic, setPic] = useState("");
  const [articles, setArticles] = useState([]);
  const [marsTemp, setMarsTemp] = useState([]); 
  const [marsPics, setMarsPics] = useState([]);

  const dailyPic = async () => {
    const response = await axios.get("/space/picOfDay");
    setPic(response.data);
  }

  const news = async () => {
    const response =  await axios.get("/space/news");
    console.log(response.data);
    setArticles(response.data);
  }

  const marsWeather = async () => {
    const response = await axios.get("/space/marsWeather");
    setMarsTemp(response);
  }

  const marsRoverPics = async () => {
    return
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
      <div className="daily-pic">
        <DailyPic
          key={pic.date}
          url={pic.url}
          explanation={pic.explanation}
          type={pic.media_type}
        />
      </div>
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
    </div>
  );
}

export default App;