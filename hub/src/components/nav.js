import React from "react";

function Nav(){
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li><a href="#latest-news">Latest News</a></li>
                    <li><a href="#mars-photos">Mars</a></li>
                    <li>Journal</li>
                    <li id="login">Login/Signup</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;