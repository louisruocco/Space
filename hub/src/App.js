import React, {useEffect, useState} from "react";
import './App.css';
import Nav from "./components/nav";
import DailyPic from "./components/dailypic";

function App() {

  const [pic, setPic] = useState("");

  const picOfDay = "https://api.nasa.gov/planetary/apod?api_key=GyZy1tC70NfISqhmiPheh2WCzmiARYOuS70JCKsZ";

  const dailyPic = async () => {
    const response = await fetch(picOfDay);
    const data = await response.json();
    console.log(data);
    setPic(data);
  }

  useEffect(() => {
    dailyPic();
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
      />
    </div>
  );
}

export default App;