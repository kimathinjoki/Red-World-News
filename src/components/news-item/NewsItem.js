import React from "react";

function NewsItem(){
    return(
        <div className="col-3 p-1">
            <div className="card" >
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a target={'_blank'} href="#" className="btn btn-primary">{'VISIT PAGE'}</a>
                </div>
            </div>
        </div>      
    )
}

export default NewsItem;