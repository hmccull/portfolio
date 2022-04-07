import React from "react";
import { AiOutlineLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
// TiSocialLinkedinCircular

function SocialNavBar() {
    return (
        <div id='social-nav-bar'>
            <a href="https://www.linkedin.com/in/hannahmccullough/" target='blank'><AiOutlineLinkedin /></a>
            <hr className='social-hr' />
            <a href="https://github.com/hmccull" target='blank'><AiFillGithub /></a>
            <hr className='social-hr' />
            <a href="mailto:mccullough.hannah@outlook.com"><AiOutlineMail /></a>
            <hr className='social-hr' />
        </div>
    )
}

export default SocialNavBar;