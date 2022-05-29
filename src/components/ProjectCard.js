
import { useParams, NavLink } from 'react-router-dom'
import React, { useEffect, useState } from "react";

function ProjectCard(props) {
    useEffect(() => { })



    return (
        <div className="projectCard">
            <img
                className="projectCover"
                src={props.cover}
            />
            <div className="projectTitle">
                <h3>{props.title.toUpperCase()}</h3>
                <NavLink
                    className="projectLink"
                    to={`/projects/${Number(props.id) + 1}`}
                >
                    <p>Ver más</p>
                    <img src="../assets/images/icons/shortRightArrow.svg"alt="shortRightArrow" />
                </NavLink>
            </div>
        </div>

    )
}

export default ProjectCard;