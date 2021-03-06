import React from 'react';
import Collapse from '@mui/material/Collapse';

function About() {

    return (
        <div id='about'>
            <Collapse 
                direction='up' 
                in
            >
            <div className='right-section-header'>About</div>
            <hr className='section-hr' />
            <div id='about-content'>
                <img id='prof-pic' src='./profPic.png' alt='Hannah McCullough' />
                <p id='about-text'>
                    I'm an innovative full-stack web developer with skills in building applications with a user-experience approach by utilizing Ruby, Rails, JavaScript, React, SQL databases, and RESTful API architecture. With a customer-service, management, and athletic background, I bring strong skills in client relations, collaboration, and leadership.  
                </p>
            </div>
            </Collapse>
        </div>
    )
}

export default About;