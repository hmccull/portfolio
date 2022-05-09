import React from 'react';
import Slide from '@mui/material/Slide';

const logo = (
    <img src='./hmLogo.svg' className='App-logo' alt='logo' />
)

function LoadingMain() {

    return (
        <div id='loading'>
            <Slide
                direction='down'
                in
                appear
                timeout={{
                    enter: 3000,
                    exit: 2000
                }}
            >
                {logo}
            </Slide>
        </div>
    )
}

export default LoadingMain;