import React from "react";

const Article = ({link, headline, summary, imageLink}) => {
    return (
        <div className="content">
            <div className="article">
                <a href={link} target = "__blank">
                    <h3>{headline}</h3>
                    <img src={imageLink}/>
                    <p>{summary}</p>
                </a>
            </div>
        </div>
    )
}

export default Article;