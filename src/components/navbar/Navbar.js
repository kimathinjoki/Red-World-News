import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

    return(
        // <nav classNAme="navbar bg-body-tertiary">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">ReD-NeWS</a>
        //         <li className="nav-item">
        //         <a className="nav-link active" aria-current="page" href="#">Home</a>
        //         </li>
        //         <form className="d-flex" role="search">
        //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        //         <button className="btn btn-outline-success" type="submit">Search</button>
        //         </form>
        //     </div>
        // </nav>
        <nav className="navbar bg-body-tertiary bg-dark">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand">ReD-NeWS</Link>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link to="/sources"className="nav-link text-dark me-auto">Sources</Link>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search here..." aria-label="Search"/>
                <button className="btn btn-outline-success ms-1" type="submit">Search</button>
            </form>
            </div>
        </nav>
    )
       
}

export default Navbar;