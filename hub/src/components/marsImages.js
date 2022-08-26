import React from "react"

const MarsRoverImages = ({url}) => {
    if(url){
        return (
            <div className="marsImages">
                <div className="images">
                    <img src={url} alt={url} />
                </div>
            </div>
        )
    } else {
        return (
            <div className="marsImages">
                <h3>No Images Today</h3>
            </div>
        )
    }
}

export default MarsRoverImages;