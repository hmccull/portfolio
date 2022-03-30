import React from 'react';
// import FadeIn from 'react-fade-in';

function About() {

    return (
        <div id='about'>
            <div className='right-section-header'>About</div>
            <hr />
            <div className='section-content'>
                <img id='prof-pic' src='./profPic.png' alt='Hannah McCullough' />
                <p className='section-text'>
                    I'm an innovative full-stack web developer with skills in building applications with a user-experience approach by utilizing Ruby, Rails, JavaScript, React, SQL databases, and RESTful API architecture. With a customer-service, management, and athletic background, I bring strong skills in client relations, collaboration, and leadership.  
                </p>
            </div>
        </div>
    )
}

export default About;