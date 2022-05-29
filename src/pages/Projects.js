

import ProjectCard from '../components/ProjectCard';
import list from '../data/projects.json';
import React, { useEffect, useState } from "react";

import "../assets/styles/projects.css";

function Projects() {
    const [projectsList, setProjectsList] = useState(list);
    let [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(
            projectsList.map((project, i) => {
                return (
                    <ProjectCard
                        {...project}
                        key={i}
                    />)
            })
        )
    })
    return (
        <div className="projectsPage">
            {projects}
        </div>

    )
}

export default Projects;