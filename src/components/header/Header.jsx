import React from 'react'
import './header.css'
import CTA from "./CTA"
import ME from '../../assets/Headshot.jpg'
import HeaderSocial from './Socials'

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Matias Ahrensdorf</h1>
                <h5 className="text-light">Striving Business Professional</h5>
                <CTA />
                <HeaderSocial />

                <div className='headShot'>
                    <img src={ME} alt="headshot" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header