
import { useParams, Link } from 'react-router-dom'
import list from '../data/projects.json';
import React, { useEffect, useState } from "react";
import "../assets/styles/project.css"

function Project() {
    const params = useParams(); // Objtengo el parámetro de la ruta
    const [projectsList, setProjectsList] = useState(list); // Utilizo la lista de proyectos para obtener uno de ellos segun el id obtenido
    const [projectId, setProjectId] = useState(Number(params.id)); // Uso el parámetro id
    const [project, setProject] = useState(projectsList[(params.id - 1)]);
    const [url, setUrl] = useState(window.location.href);
    //console.log(project);

    const [projectPage, setProjectPage] = useState([]);

    /* const [previous, setPrevious] = useState([]);
    const [next, setNext] = useState([]); */
    // Defino las variables para próximos y anteriores proyectos
    var previous;
    var next;
    var nextProject = document.querySelector(".nextProject");
    var previousProject = document.querySelector(".previousProject");

    useEffect(() => {

        console.log(nextProject);


        setProjectPage(
            <div className="projectContainer">
                <div className="projectPageCover">
                    <img
                        src={project.cover}
                        alt="projectPageCover"
                    />

                    <div className="projectPageTitle">
                        <h2>{projectsList[projectId - 1].title.toUpperCase()}</h2>
                    </div>
                </div>
                <div className='projectPageData'>

                    <ul>
                        <li className='leftInfo'>
                            <img className="" src="../assets/images/icons/meassuresIcon.svg" alt="meassuresIcon" />
                            <p>m<sup>2</sup> Total</p></li>
                        <li >
                            <img src="../assets/images/icons/floorsIcon.svg" alt="floorsIcon" />
                            <p>Plantas</p>
                        </li>
                        <li className="middleInfo">
                            <img src="../assets/images/icons/bathsIcon.svg" alt="bathsIcon" />
                            <p>Baños</p>
                        </li>
                        <li >
                            <img src="../assets/images/icons/garageIcon.svg" alt="garageIcon" />
                            <p>Cocheras</p>
                        </li>
                        <li className='rightInfo'>
                            <img src="../assets/images/icons/roomsIcon.svg" alt="roomsIcon" />
                            <p>Habitaciones</p>
                        </li>
                    </ul>
                    <p className='projectPageDescription'>
                        {project.description}
                    </p>

                </div>
                <div className='projectNavigation'>
                    <Link
                        className="previousProject"
                        to={previous.route}
                        onClick={() => setUrl(projectId--)}
                    >
                        <img src="../assets/images/icons/leftArrow.svg" alt="leftArrow" />
                        {previous.title}
                    </Link>
                    <Link
                        className="nextProject"
                        to={next.route}
                        onClick={() => console.log(projectId++)}
                    >
                        {next.title}
                        <img src="../assets/images/icons/rightArrow.svg" alt="rightArrow" />
                    </Link>
                </div>
            </div>
        )
    }, [/* url, next.route, next.title, previous.route, previous.title, */ project.cover, project.description, projectId, projectsList])
    // Si el parámetro es >1, entonces indico el valor de previous, sino, lo vacío, esto funciona tanto para previous como para next
    if (params.id > 1) {
        previous = {
            title: "Anterior",
            route: "/projects/" + (projectId - 1)
        };

    } else {
        /* previousProject.getElementsByClassName.display = "none"; */
        previous = {
            title: "",
            route: "/"
        };

    }
    if (params.id < projectsList.length) {
        next = {
            title: "Siguiente",
            route: "/projects/" + (projectId + 1)
        };

    } else {
        next = {
            title: "",
            route: ""
        };

    }
    /* if (params.id > 1) {
        setPrevious({
            title: "Anterior",
            route: "/projects/" + (projectId - 1)
        })

    } else {
        setPrevious({
            title: "",
            route: "/"
        })

    }
    if (params.id < projectsList.length) {
        setNext({
            title: "Siguiente",
            route: "/projects/" + (projectId + 1)
        })

    } else {
        setNext({
            title: "",
            route: ""
        })
    } */

    return (
        <div className="projectPage">
            {projectPage}
        </div>
    )
}

export default Project;