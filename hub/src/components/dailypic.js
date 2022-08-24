import React from "react";

const DailyPic = ({url, explanation, type}) => {
    if(type === "image"){
        return (
            <div className="dailyPic">
                <div className="subtitle">
                    <h2>Photo of the Day:</h2>
                </div>
                <hr />
                <img src={url} alt={url} />
                <p>{explanation}</p>
            </div>
        )
    } else {
        return (
            <div className="dailyPic">
                <div className="subtitle">
                    <h2>Video of the Day:</h2>
                </div>
                <hr />
                <iframe title="videoOfDay" width = "600px" height = "400px" src={url}></iframe>
                <p>{explanation}</p>
            </div>
        )
    }
}

export default DailyPic;