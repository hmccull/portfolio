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
            <p><b>Flatiron School</b></p>
            <p><i>11/2021 - 03/2022</i></p>
            <p>Certificate</p>
            <p>Full-stack Software Engineering</p>
          </span>
          <span id='education-text'>
            <p><b>Scottsdale Community College</b></p>
            <p><i>08/2018 - 12/2022</i></p>
            <p>Assocates in Applied Science</p>
            <p>Web Development</p>
            <p>Web Design</p>
          </span>
          <span id='education-text' style={{ paddingRight: 0 }}>
            <p><b>Saint Francis University/<br />Lake Erie College</b></p>
            <p><i>08/2010 - 05/2014</i></p>
            <p>Bachelor of Arts in Psychology</p>
            <p>Athlete</p>
          </span>
        </div>
      </Collapse>
    </div>
  )
}

export default Education;