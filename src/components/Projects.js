import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
                showThumbs={false}
                height='100%'
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