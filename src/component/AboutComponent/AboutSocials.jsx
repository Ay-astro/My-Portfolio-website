import {FaGithubSquare,FaWhatsappSquare,FaTwitterSquare} from 'react-icons/fa'
import { FaLinkedin} from "react-icons/fa6";

function AboutSocials() {
    return (
        <div className="socialLinks">
        <ul className="socialsUL flex">
            <li><a href="">
            <FaGithubSquare />
                </a></li>
            <li>
                <a href="">
                <FaTwitterSquare />
                </a>
            </li>
            <li><a href="">
                <FaWhatsappSquare/>
                </a></li>
            <li><a href="">
                <FaLinkedin/>
                </a></li>
        </ul>
        </div>
    )
}

export default AboutSocials
