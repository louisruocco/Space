import React from "react";

function DailyPic({url}){
    return (
        <div className="dailyPic">
            <div className="title">
                <h2>Astronomy Photo of the Day:</h2>
            </div>
            <img src={url} alt="" />
        </div>
    )
}

export default DailyPic;