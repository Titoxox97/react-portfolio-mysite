import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const Socials = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/matias-ahrensdorf-5353b4152" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Titoxox97" target="_blank"><FaGithubSquare /></a>
            <a href="https://m.facebook.com/matias.ahrensdorf.1"><FaFacebookF /></a>
            <a href="https://www.instagram.com/mahrens3/" target="_blank"><GrInstagram /></a>


        </div>
    )
}

export default Socials