import React from "react";

function NavBar() {
    return (
        <div id='nav-bar'>
            <a href="#home">Home</a>
            <hr className='social-hr' />
            <a href="#about">About</a>
            <hr className='social-hr' />
            <a href="#projects">Projects</a>
            <hr className='social-hr' />
            <a href="#contact">Contact</a>
            <hr className='social-hr' />
            <a href="#resume">Resume</a>
        </div>
    )
}

export default NavBar;