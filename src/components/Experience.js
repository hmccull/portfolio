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
              JavaScript, React, RESTful APIs, Node, TypeScript, Python, HTML, CSS, Project Management, Jira, Banking, Rocketlane, P&C Insurance, BaaS, FinTech, Microsoft, MongoDB, Ruby on Rails, Git, DataDog, Microservices, Content Management Systems, Postman, AWS, SQLite, Docker, Bootstrap
            </p>
          </div>
        </div>
        <div id='experience-content'>
          <div id='experience-text'>
            <b>REX</b> <br />
            <b>Web Developer</b> <br />
            <i>Phoenix, AZ | 10/2023 - Present</i>
            <p>
              • Develop a full-stack, responsive web application based on product design specifications utilizing React, JavaScript, TypeScript, Tailwind CSS, and Rails
            </p>
            <p>
              • Model custom database schemas and RESTful APIs with Rails, Active Record, and PostgresSQL to ensure efficient data management and system performance
            </p>
            <p>
              • Collaboratively define project scope and craft user stories based on product and design requirements, fostering stakeholder alignment and facilitating effective communication within the team
            </p>
          </div>
        </div>
        <div id='experience-content'>
          <div id='experience-text'>
            <b>Synapse Financial Technologies</b> <br />
            <b>Software Engineer II</b> <br />
            <i>Remote | 07/2022 - 10/2023</i>
            <p>
              • Served as team lead providing technical guidance, mentorship, and knowledge to teammates, resulting in furthered progress of technical implementations
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
            <b>Freelance</b> <br />
            <b>Web Developer & Designer</b> <br />
            <i>Phoenix, AZ | 01/2018 - 07/2022</i>
            <p>
              • Designed, launched, and maintained websites with user-friendly interfaces utilizing content management systems, including Wordpress and SquareSpace, which effectively increased traffic, leads, and sales
            </p>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default Experience;