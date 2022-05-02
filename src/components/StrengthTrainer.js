import React from "react";

function StrengthTrainer() {
    return (
        <div id='strength-trainer'>
            <div className='left-project-header'>StrengthTrainer</div>
            <div className='project-content'>
            <img id='project-pic' src='./strength-trainer-mockup-home.png' alt='Strength Trainer App Home' />
            <img id='project-pic' src='./strength-trainer-mockup-desktop.png' alt='Strength Trainer App Desktop' />
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

export default StrengthTrainer;