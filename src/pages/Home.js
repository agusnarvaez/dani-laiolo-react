import AboutMe from './AboutMe'
import Contact from './Contact';
import React, { useEffect, useState } from "react";
import list from '../data/projects.json';
import Cover from "../components/Cover";
import "../assets/styles/home.css"
function Home() {
    const [projectsList, setProjectsList] = useState(list);
    /* const [cover, setCover] = useState(""); */
    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    const cover = projectsList[random(0, projectsList.length)].cover;
    useEffect(() => {
        /* console.log(cover.toString()) */

        //console.log(projectsList[random(0, projectsList.length)].cover);

        //setCover(projectsList[random(0, projectsList.length)].cover.toString())
    })
    return (

        <Cover src={cover} />



    )
}

export default Home;