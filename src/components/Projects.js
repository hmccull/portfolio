import React from "react";
import Housd from "./Housd";
import StrengthTrainer from "./StrengthTrainer";

function Projects() {
    return (
        <div id='projects'>
            <div className='left-section-header'>Projects</div>
            <hr />
                <StrengthTrainer />
                <Housd />
        </div>
    )
}

export default Projects;