import React from 'react';
import Collapse from '@mui/material/Collapse';

function Education() {

    return (
        <div id='education'>
            <Collapse 
                direction='up' 
                in
            >
            <div className='right-section-header'>Education</div>
            <hr className='section-hr' />
            <div id='education-content'>
                <span id='education-text'>
                    <b>Flatiron School</b> <br />
                    <i>11/2021 - 03/2022</i> <br />
                    Certificate <br />
                    Full-stack Software Engineering
                </span>
                <span id='education-text'>
                    <b>Scottsdale Community College</b> <br />
                    <i>08/2018 - 12/2022</i> <br />
                    Assocates in Applied Science<br />
                    Web Development <br />
                    Web Design
                </span>
                <span id='education-text' style={{ paddingRight: 0, paddingLeft: 50 }}>
                    <b>Saint Francis University/Lake Erie College</b> <br />
                    <i>08/2010 - 05/2014</i> <br />
                    Bachelor of Arts in Psychology <br />
                    Athlete
                </span>
            </div>
            </Collapse>
        </div>
    )
}

export default Education;