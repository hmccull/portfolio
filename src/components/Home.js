import React from 'react';

function Home() {

    return (
        <div id='home'>
            <h5>Hi, my name is</h5>
            <img id='logo-name' src='./hmName.svg' alt='Hannah McCullough' />
            <h3 id='home-sub-header'>
                I develop things for the web.
            </h3>
            <p id='intro-text'>
                Coding makes me happy, so does design.
                <br /> 
                I do best in the face of a challenge. 
                <br />
                I run from noise and clutter.
                <br />
                Detail is always key. So is a sense of humor.
                <br />
                I work as I live; intentional and with purpose.
            </p>
        </div>
    )
}

export default Home;