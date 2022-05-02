import React from "react";

function Housd() {
    return (
        <div id='housd'>
            <div className='left-project-header'>Housd</div>
            <div className='project-content'>
            <img id='project-pic' src='./housd-mockup.png' alt='Placeholder' />
                <p className='project-text'>
                Home maintenance checklist and service booking application designed with dual-user types for homeowners and service providers
                    • Modeled custom database schema and REST API with Active Record, Postgres, and Rails
                    • Created two different dashboards with routing based on user login information determining user’s profile type
                    • Utilized Auth and bcrypt to authenticate user login and authorize user functionality based on user type
                </p>
            </div>
        </div>
    )
}

export default Housd;