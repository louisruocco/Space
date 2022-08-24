import React from "react";

const Article = ({link, headline, summary, imageLink}) => {
    return (
        <div className="content">
            <div className="article">
                <a href={link} target = "__blank">
                    <img src={imageLink}/>
                    <div className="text">
                        <h3>{headline}</h3>
                        <p>{summary}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Article;