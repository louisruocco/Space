import React from "react";

const DailyPic = ({url, explanation}) => {
    return (
        <div className="dailyPic">
            <img src={url} />
            <iframe title="videoOfDay" width = "600px" height = "400px" src={url}></iframe>
            <p>{explanation}</p>
        </div>
    )
}

export default DailyPic;