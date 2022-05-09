import React from 'react';
import { AiOutlineLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
// TiSocialLinkedinCircular

function SocialNavBar() {
    return (
        <div id='social-nav-bar'>
            <a href='https://www.linkedin.com/in/hannahmccullough/' target='blank'><AiOutlineLinkedin size={20} /></a>
            <hr />
            <a href='https://github.com/hmccull' target='blank'><AiFillGithub size={20} /></a>
            <hr />
            <a href='mailto:mccullough.hannah@outlook.com'><AiOutlineMail size={20} /></a>
            <hr />
        </div>
    )
}

export default SocialNavBar;