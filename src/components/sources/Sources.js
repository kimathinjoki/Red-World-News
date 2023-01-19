import React, {useState, useEffect} from "react";
// import NewsItem from "../news-item/NewsItem";
import SourcesItem from "./SourcesItem";


const  key =  "502fd41bbab24a8c9922bbc27f62da56"
const url ="https://newsapi.org/v2/top-headlines/sources?apiKey="+key

// const url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=502fd41bbab24a8c9922bbc27f62da56"




function Sources(){

    const [newSources,setNewSources] = useState([])

    useEffect(
        ()=>{
            fetch(url)
            .then(r => r.json())
            .then((data)=>{
                console.log(data)
                setNewSources(data.sources)
            })

        }, []
    )

    const sources = newSources.map(
        (value,index)=> <SourcesItem name={value.name} description={value.description} url={value.url} key={'source_'+index}/>
    )
    return(
            <div className="container-75 mt-3">
                <center>
                <h4>NEWS SOURCES</h4>
                </center>
                
                <div  className="row">
                    {sources}
                </div>
                
            </div>
        )
    
}

export default Sources;
