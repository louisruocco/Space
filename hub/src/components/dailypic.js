import React from "react";

const DailyPic = ({url, explanation}) => {
    return (
        <div className="dailyPic">
            <div className="title">
                <h2>Photo of the Day:</h2>
            </div>
            <hr />
            <img src={url} alt="" />
            <iframe width="320" height="240" src={url}></iframe>
            <p>{explanation}</p>
        </div>
    )
}

export default DailyPic;