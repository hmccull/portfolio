import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import Housd from './Housd';
import StrengthTrainer from './StrengthTrainer';


function Projects() {
    return (
        <div id='projects'>
            <div className='left-section-header'>Projects</div>
            <hr className='section-hr' />
            <Carousel
                infiniteLoop
                showArrows
                autoFocus
                swipeable
                showStatus={false}
                showThumbs={false}
            >
                <div>
                    <StrengthTrainer />
                </div>
                <div>
                    <Housd />
                </div>
            </Carousel>
        </div>
    )
}

export default Projects;