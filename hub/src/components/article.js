import React from "react";

const Article = ({link, headline, imageLink}) => {
    return (
        <div className="content">
            <div className="article">
                <a href={link} target = "__blank">
                    <img src={imageLink}/>
                    <div className="text">
                        <h3>{headline}</h3>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Article;