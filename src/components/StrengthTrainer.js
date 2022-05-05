import React, { useState, useRef } from "react";
import Switch from '@mui/material/Switch';
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';

const project = (
    <p className='project-text'>
        Strength training application tracker equipped with organizational workout logging and data calculations based on user input
        <br />
        <br />
        Developed Rails API and Postgres back end with endpoints for users and their workouts
        <br />
        <br />
        User interface implemented with JavaScript/React, reactstrap, and CSS
        <br />
        <br />
        Authenticated users at login by encrypting identifying account information via Auth and bcrypt
    </p>
);

function StrengthTrainer() {
    const [checked, setChecked] = useState(false);
    const containerRef = useRef(null);

    const handleChange = () => {
        setChecked((prev) => !prev)
    };

    return (
        <div id='strength-trainer'>
            <div className='project-header'>StrengthTrainer</div>

            <div id='strength-images'>
                <img id='project-pic' src='./strength-trainer-mockup.png' alt='Strength Trainer App Home' width={900} />
            </div>

            <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="About this project"
            />
            <Collapse 
                direction="down" 
                in={checked} 
                container={containerRef.current}
            >
                {<hr className='project-hr' />}
            </Collapse>
            <Collapse 
                direction="up" 
                in={checked} 
                container={containerRef.current}
            >
                {project}
            </Collapse>
            <Grow 
                direction="right" 
                in={checked} 
                container={containerRef.current}
            >
                {<hr />}
            </Grow>
        </div>
    )
}

export default StrengthTrainer;