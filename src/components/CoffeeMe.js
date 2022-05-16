import React, { useState, useRef } from 'react';
import Switch from '@mui/material/Switch';
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
        primary: '#2E2C29',
    },
});

const project = (
    <ThemeProvider>
        <p className='project-text'>
            SPA to get and share coffee recipes with search and filtering tools and the capability to post new recipes
            <br />
            <br />
            Engineered back end using Active Record and Rails
            <br />
            <br />
            Implemented modern front end with JavaScript/React, Material UI, and CSS
            <br />
            <br />
            Designed layouts and components to provide a seamless user experience while navigating the application
        </p>
        <Button variant='outlined' href='https://github.com/1NJ57C3/phase-3-sinatra-react-project-frontend'>
            GitHub - Front End
        </Button>
        <Button variant='outlined' href='https://github.com/1NJ57C3/phase-3-sinatra-react-project-backend'>
            GitHub - Back End
        </Button>
    </ThemeProvider>
);

function CoffeeMe() {
    const [checked, setChecked] = useState(false);
    const containerRef = useRef(null);

    const handleChange = () => {
        setChecked((prev) => !prev)
    };

    return (
        <div className='project-container'>
            <div className='project-header'>CoffeeMe Recipes</div>

            <img id='project-pic' src='./coffeeme-recipes-mockup.png' alt='CoffeeMe Recipe App' width={900} />

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

export default CoffeeMe;