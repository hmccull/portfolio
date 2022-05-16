import React, { useState, useRef } from 'react';
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Grow } from '@mui/material';

const project = (
        <p className='project-text'>
            Home maintenance checklist and service booking application designed with dual-user types for homeowners and service providers 
            <br />
            <br />
            Modeled custom database schema and REST API with Active Record, Postgres, and Rails
            <br />
            <br />
            Created two different dashboards with routing based on user login information determining user’s profile type
            <br />
            <br />
            Utilized Auth and bcrypt to authenticate user login and authorize user functionality based on user type
        </p>
  );

function Housd() {
    const [checked, setChecked] = useState(false);
    const containerRef = useRef(null);

    const handleChange = () => {
        setChecked((prev) => !prev);
    }

    return (
        <div id='housd'>
            <div className='project-container'>Housd</div>
            
            <img src='./housd-mockup.png' alt='Housd App Desktop' />

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
                direction='down' 
                in={checked} 
                container={containerRef.current}
            >
                {<hr style={{ border: '.5px solid #BDB1A5' }} />}
            </Grow>
        </div>
    );
}

export default Housd;