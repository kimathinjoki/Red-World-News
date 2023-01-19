import React from "react";

export default function SourcesItem({name, description, url}){
    return(
        <div className="col-3 p-1">
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <a target={'_blank'} className="btn btn-primary" href={url}>{'VISIT PAGE'}</a>
                </div>
            </div>
        </div>      
    )
}