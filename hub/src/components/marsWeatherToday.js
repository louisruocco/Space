import React from "react";

const TodaysMarsWeather = ({temp}) => {
    return (
        <div className="marsWeather">
            <div className="today">
                <h3>Today:</h3>
                <p>{temp}°C</p>
            </div>
        </div>
    )
}

export default TodaysMarsWeather;