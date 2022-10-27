import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Navigator(){
    return(
        <Fragment>
        <div className="navigator">
            <Link to="/"><div className="navigator-route"><span>Home</span></div></Link>
            <Link to="/calander"><div className="navigator-route"><span>Calander</span></div></Link>
        </div>
       

        </Fragment>
    )
}