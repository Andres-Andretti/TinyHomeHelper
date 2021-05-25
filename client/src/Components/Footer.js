import React from 'react'
import GitHubIcon  from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import "./CSS/Footer.css";


function Footer() {
    return (
        <div className="footer">
            <h3> The Devs </h3>
            <div className="meetDevs"> 
                <p>Summer Johnson </p>
                    <div>&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/SJ-CODES" ><GitHubIcon  /></a>
                        <a href="https://www.linkedin.com/in/summer-johnson-057910111/" ><LinkedInIcon  /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                <p>Layton Avery</p>
                    <div>&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/LaytonAvery"><GitHubIcon  /></a>
                        <a href="https://www.linkedin.com/in/laytonavery/"><LinkedInIcon   /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                <p>Andres Corredor</p>
                    <div>&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/Andres-Andretti" ><GitHubIcon  /></a>
                        <a href="https://www.linkedin.com/in/andres-corredor-b30463b1/" ><LinkedInIcon  /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                <p> Megan Mason</p>
                    <div>&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/mmason27"><GitHubIcon   /></a>
                        < a href="https://www.linkedin.com/in/megan-m-mason/"><LinkedInIcon   /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
            </div>
        </div>
    )
}

export default Footer
