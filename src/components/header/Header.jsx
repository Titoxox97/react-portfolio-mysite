import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/biopic_2.jpeg'
import HeaderSocial from './Socials'
import { PROFILE } from '../../data/site'

const Header = () => {
    return (
        <header id='home'>
            <div className="container header_container">
                <div className='header_intro'>
                    <h5>Hello, I'm</h5>
                    <h1>{PROFILE.name}</h1>
                    <h5 className="text-light header_title">{PROFILE.title}</h5>
                    <p className='header_blurb'>
                        Half data infrastructure, half quantitative research for scholars
                        at the Manhattan Institute. I write in my spare time.
                    </p>
                    <CTA />
                </div>

                <div className='headShot'>
                    <img src={ME} alt={`${PROFILE.name}, portrait`} />
                </div>

                <HeaderSocial />
                <a href="#about" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
