import React from "react";

const DailyPic = ({url, explanation, type}) => {
    if(type === "image"){
        return (
            <div className="dailyPic">
                <div className="subtitle">
                    <h2>Photo of the Day:</h2>
                </div>
                <hr />
                <div className="pic">
                    <img src={url} alt={url} />
                    <p>{explanation}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="dailyPic">
                <div className="subtitle">
                    <h2>Video of the Day:</h2>
                </div>
                <hr />
                <div className="video">
                    <iframe title="videoOfDay" width = "600px" height = "400px" src={url}></iframe>
                    <p>{explanation}</p>
                </div>
            </div>
        )
    }
}

export default DailyPic;