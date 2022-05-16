import React, { useState, useRef } from 'react';

import Switch from '@mui/material/Switch';
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';

const project = (
    <>
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
        <button className='project-btn' href='https://github.com/hmccull/strength-trainer' target='_blank'>
            GitHub
        </button>
    </>
);

function StrengthTrainer() {
    const [checked, setChecked] = useState(false);
    const containerRef = useRef(null);

    const handleChange = () => {
        setChecked((prev) => !prev)
    };

    return (
        <div className='project-container'>
            <div className='project-header'>StrengthTrainer</div>

            <img id='project-pic' src='./strength-trainer-mockup.png' alt='Strength Trainer App Mockup' width={900} />

            <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} color='default' />}
                label='About this project'
                labelPlacement='top'
            />
            <Collapse 
                direction='up' 
                in={checked} 
                container={containerRef.current}
            >
                {project}
            </Collapse>
            <Grow 
                direction='right' 
                in={checked} 
                container={containerRef.current}
            >
                {<hr style={{ border: '.5px solid #BDB1A5' }} />}
            </Grow>
        </div>
    )
}

export default StrengthTrainer;