import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare, FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { SOCIALS } from '../../data/site'

// react-icons is pinned at 4.4.0 in the lockfile, which predates the X rebrand,
// so FaXTwitter is not available. Inline SVG avoids a version bump.
const XMark = () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)

const ICONS = {
    linkedin: BsLinkedin,
    github: FaGithubSquare,
    x: XMark,
    instagram: GrInstagram,
    facebook: FaFacebookF,
}

// `variant` lets the footer reuse this component with its own layout class.
const Socials = ({ variant = 'header' }) => {
    return (
        <div className={`${variant}_socials socials`}>
            {SOCIALS.map(({ id, label, url }) => {
                const Icon = ICONS[id]
                if (!Icon) return null
                return (
                    <a
                        key={id}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        title={label}
                    >
                        <Icon />
                    </a>
                )
            })}
        </div>
    )
}

export default Socials
