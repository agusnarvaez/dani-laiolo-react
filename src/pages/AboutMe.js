import React from 'react'
import "../assets/styles/about.css"
function AboutMe() {
    return (
        <div className="aboutPage">
            <div className="about">
                <h2 className="tituloAbout">Sobre Mi</h2>
                <p>Persona Íntegra y con habilidades para las relaciones interpersonales. Me gustaría afrontar un trabajo que permita desarrollarme y crecer profesionalmente con el objetivo de profundizar mis conocimientos. Me consideron una persona responsable, con actitud positiva y buena capacidad de aprendizaje y trabajo en equipo.
                </p>
            </div>
            <div className="aboutCover">
                <img
                    src="../assets/images/background/aboutCover.png"
                    alt="aboutCover"
                />
            </div>
        </div >
    )
}

export default AboutMe;