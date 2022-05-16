import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CoffeeMe from './CoffeeMe';

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
                height='50vh'
            >
                <div>
                    <StrengthTrainer />
                </div>
                <div>
                    <Housd />
                </div>
                <div>
                    <CoffeeMe />
                </div>
            </Carousel>
            <p><em>More projects coming soon!</em></p>
        </div>
    )
}

export default Projects;