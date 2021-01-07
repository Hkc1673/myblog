import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <TwitterIcon color="primary" fontSize="large"/>
            <GitHubIcon fontSize="large"/>
            <LinkedInIcon color="primary" fontSize="large"/>
        </div>
    )
}

export default Footer
