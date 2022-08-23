import React from "react";

const DailyPic = ({url, explanation, type}) => {
    if(type === "image"){
        return (
            <div className="dailyPic">
                <img src={url} alt={url} />
                <p>{explanation}</p>
            </div>
        )
    } else {
        return (
            <div className="dailyPic">
                <iframe title="videoOfDay" width = "600px" height = "400px" src={url}></iframe>
                <p>{explanation}</p>
            </div>
        )
    }
}

export default DailyPic;