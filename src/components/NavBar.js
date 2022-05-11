import React from 'react';

function NavBar() {
    return (
        <div id='nav-bar'>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='./HannahMcCulloughResume.pdf' target='blank'>Resume</a></li>
            </ul>
        </div>
    )
}

export default NavBar;