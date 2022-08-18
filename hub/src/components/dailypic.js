import React from "react";

const DailyPic = ({url, explanation}) => {
    return (
        <div className="dailyPic">
            <div className="title">
                <h2>Photo of the Day:</h2>
            </div>
            <img src={url} alt="" />
            <p>{explanation}</p>
        </div>
    )
}

export default DailyPic;