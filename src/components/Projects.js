import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Housd from "./Housd";
import StrengthTrainer from "./StrengthTrainer";


function Projects() {
    return (
        <div id='projects'>
            <div className='left-section-header'>Projects</div>
            <hr />
            <Carousel
                axis='vertical'
                swipeable
                verticalSwipe="natural"
                infiniteLoop
                autoFocus={true}
                // showStatus={false}
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