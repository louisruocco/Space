import React from "react"

const MarsRoverImages = ({url}) => {
    return (
        <div className="marsImages">
            <div className="images">
                <img src={url} alt={url} />
            </div>
        </div>
    )
}

export default MarsRoverImages;