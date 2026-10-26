import React, { useEffect, useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageRoundedDots } from 'react-icons/bi'
import { BsBriefcase } from 'react-icons/bs'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { SECTIONS } from '../../data/site'

const ICONS = {
    home: AiOutlineHome,
    about: AiOutlineUser,
    experience: BiBook,
    work: BsBriefcase,
    resume: HiOutlineDocumentText,
    contact: BiMessageRoundedDots,
}

const Nav = () => {
    const [active, setActive] = useState('home')

    // Track the section actually on screen instead of only the last click,
    // so the nav stays correct when the visitor scrolls or deep-links.
    useEffect(() => {
        const nodes = SECTIONS
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean)

        if (!nodes.length || typeof IntersectionObserver === 'undefined') return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
                if (visible) setActive(visible.target.id)
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
        )

        nodes.forEach((n) => observer.observe(n))
        return () => observer.disconnect()
    }, [])

    return (
        <nav aria-label="Section navigation">
            {SECTIONS.map(({ id, label }) => {
                const Icon = ICONS[id]
                return (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={() => setActive(id)}
                        className={active === id ? 'active' : ''}
                        aria-label={label}
                        aria-current={active === id ? 'true' : undefined}
                    >
                        <Icon />
                        <span className='nav_tip'>{label}</span>
                    </a>
                )
            })}
        </nav>
    )
}

export default Nav
