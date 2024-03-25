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
            I'm an innovative full-stack software engineer with skills in building applications with a UX-first approach. Having technical project management experience with a curious mind & a background in customer service, management, & athletics, I bring strong skills in client relations, collaboration, & leadership.
        </p>
      </div>
      </Collapse>
    </div>
  )
}

export default About;