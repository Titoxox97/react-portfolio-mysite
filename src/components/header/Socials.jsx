import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const headerSocials = () => {
    return (
        <div className="header__socials">
            <a href="http://linkedin.com" target="_blank"><BsLinkedin /></a>
            <a href="http://github.com" target="_blank"><FaGithubSquare /></a>
            <a href="http://instagram.com" target="_blank"><GrInstagram /></a>


        </div>
    )
}

export default headerSocials