
import React, { useEffect, useState } from "react";

import "../assets/styles/home.css"
function Cover(props) {

    useEffect(() => {
        console.log(props.src)
        //`${props.src}`
    })
    return (
        <div className="cover">
            <img className="coverImg"
                src={`${props.src}`}
                alt="cover"
            />
        </div>


    )
}

export default Cover;