import React from "react";
import NewsItem from "../news-item/NewsItem";

function Home(){
    return(
        <div className="container-75 mt-3">
            <div  className="row">
                <NewsItem/>
            </div>
            
        </div>
    )

}

export default Home;