import React from 'react';
import Collapse from '@mui/material/Collapse';

function Experience() {

  return (
    <div id='experience'>
      <Collapse 
          direction='up' 
          in
      >
        <div className='left-section-header'>Professional Experience</div>
        <hr className='section-hr' />
        <div id='experience-content'>
          <div id='experience-text'>
            <b>Skills</b> <br />
            <p>
              JavaScript, React, RESTful APIs, Node, TypeScript, Python, HTML, CSS, Project Management, Jira, Banking, Rocketlane, P&C Insurance, Microsoft, MongoDB, Ruby on Rails, Git, DataDog, Microservices, Content Management Systems, Postman, AWS, SQLite, Docker, Bootstrap
            </p>
          </div>
        </div>
        <div id='experience-content'>
          <div id='experience-text'>
            <b>Freelance</b> <br />
            <b>Web Developer/Designer</b> <br />
            <i>Phoenix, AZ | 01/2018 - Present</i>
            <p>
              • Currently developing a full-stack application with extensive user capabilities and public property data utilizing React, JavaScript, TypeScript, Rails, & Active Record
            </p>
            <p>
              • Providing strong project management skills in planning & documenting project tasks resulting development progression
            </p>
            <p>
              • Modeled custom database schema and REST API with Ruby on Rails, Active Record, & PostgresSQL
            </p>
            <p>
              • Utilized Auth & bcrypt to authenticate user login and authorize user functionality based on user type
            </p>
            <p>
              • Designed websites for small businesses using content management systems with enhanced UI/UX, resulting in increased traffic and leads
            </p>
          </div>
        </div>
        <div id='experience-content'>
          <div id='experience-text'>
            <b>Synapse Financial Technologies</b> <br />
            <b>Software Engineer II</b> <br />
            <i>Remote | 07/2022 - 10/2023</i>
            <p>
              • Served as team lead providing technical guidance, mentorship, and knowledge to teammates
            </p>
            <p>
              • Implemented client-direct requests, quick turnaround feature enhancements in Python RESTful APIs
            </p>
            <p>
              • Used strong troubleshooting and bug resolution abilities to quickly rectify production API issues using DataDog, EKS, and Postman
            </p>
            <p>
              • Successfully managed technical implementation projects by eliminating blockers, evolving project process, & ensuring on-time deliverables
            </p>
            <p>
              • Provided consistent results via strong program design & management skills utilizing Jira & Rocketlane
            </p>
            <p>
              • Managed internal & external developer documentation in Confluence that provided a deeper understanding of the technical side of the products & implementations
            </p>
            <p>
              • Improved cross-team processes by providing feedback and alternative solutions to leadership, which positively impacted client experience integration changes
            </p>
          </div>
        </div>
        <div id='experience-content'>
          <div id='experience-text'>
            <b>USAA</b> <br />
            <b>Software Engineer II</b> <br />
            <i>Phoenix, AZ | 09/2018 - 11/2021</i>
            <p>
              • Served as a department facilitator in the Pulse initiative by communicating employee feedback & innovation to executives
            </p>
            <p>
              • Regularly facilitated team meetings, which resulted in an overall increase in team metrics
            </p>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default Experience;