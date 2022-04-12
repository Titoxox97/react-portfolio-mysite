import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>Matias</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#writing">Writing</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#interests">Interests</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer_socials'>
                <a href="https://m.facebook.com/matias.ahrensdorf.1"><FaFacebookF /></a>
                <a href="https://www.instagram.com/mahrens3/"><FiInstagram /></a>
                <a href="https://www.linkedin.com/in/matias-ahrensdorf-5353b4152"><AiOutlineLinkedin /></a>
                <a href="https://github.com/Titoxox97"><FaGithubSquare /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; My Portfolio. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer