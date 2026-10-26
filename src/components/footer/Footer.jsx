import React from 'react'
import './footer.css'
import Socials from '../header/Socials'
import { SECTIONS, PROFILE } from '../../data/site'

const Footer = () => {
    return (
        <footer>
            <a href='#home' className='footer_logo'>{PROFILE.name}</a>

            <ul className='permalinks'>
                {SECTIONS.map(({ id, label }) => (
                    <li key={id}><a href={`#${id}`}>{label}</a></li>
                ))}
            </ul>

            <Socials variant='footer' />

            <div className='footer_copyright'>
                <small>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
