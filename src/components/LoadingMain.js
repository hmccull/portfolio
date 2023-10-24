import React from 'react';
import Slide from '@mui/material/Slide';

const logo = (
    <img src='./hmLogo.png' className='loading-logo' alt='logo' />
)

function LoadingMain() {

    return (
        <div id='loading'>
            <Slide
                direction='down'
                in
                appear
                timeout={{
                    enter: 2000,
                    exit: 1000
                }}
            >
                {logo}
            </Slide>
        </div>
    )
}

export default LoadingMain;