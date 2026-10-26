import React, { useState } from 'react'
import './work.css'
import { FiArrowUpRight } from 'react-icons/fi'
import { ARTICLES, PROJECTS } from '../../data/site'

const BEATS = ['All', 'Latin America', 'Finance', 'Policy']

const Work = () => {
    const [tab, setTab] = useState('articles')
    const [beat, setBeat] = useState('All')

    const shown = beat === 'All' ? ARTICLES : ARTICLES.filter((a) => a.beat === beat)
    // Pull the flagged piece out so it can lead the section at full width.
    const featured = shown.find((a) => a.featured)
    const rest = shown.filter((a) => a !== featured)

    return (
        <section id='work'>
            <h5>Published Articles and Selected Projects</h5>
            <h2>Work</h2>

            <div className='container work_container'>
                <div className='work_tabs' role='tablist' aria-label='Work categories'>
                    <button
                        role='tab'
                        aria-selected={tab === 'articles'}
                        className={`work_tab ${tab === 'articles' ? 'active' : ''}`}
                        onClick={() => setTab('articles')}
                    >
                        Articles <span className='work_count'>{ARTICLES.length}</span>
                    </button>
                    <button
                        role='tab'
                        aria-selected={tab === 'projects'}
                        className={`work_tab ${tab === 'projects' ? 'active' : ''}`}
                        onClick={() => setTab('projects')}
                    >
                        Projects <span className='work_count'>{PROJECTS.length}</span>
                    </button>
                </div>

                {tab === 'articles' && (
                    <>
                        <div className='work_filters'>
                            {BEATS.map((b) => (
                                <button
                                    key={b}
                                    className={`work_filter ${beat === b ? 'active' : ''}`}
                                    onClick={() => setBeat(b)}
                                    aria-pressed={beat === b}
                                >
                                    {b}
                                </button>
                            ))}
                        </div>

                        {featured && (
                            <a
                                className='work_featured'
                                href={featured.url}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <div className='work_featured-meta'>
                                    <span className='work_flag'>Featured</span>
                                    <span className='work_beat'>{featured.beat}</span>
                                </div>
                                <h3>{featured.title}</h3>
                                <div className='work_featured-foot'>
                                    <span className='work_outlet work_outlet--lg'>
                                        {featured.outlet}
                                        {featured.date && <em className='work_date'>{featured.date}</em>}
                                    </span>
                                    <span className='work_read'>
                                        Read it <FiArrowUpRight aria-hidden='true' />
                                    </span>
                                </div>
                            </a>
                        )}

                        <div className='work_grid'>
                            {rest.map((a) => (
                                <a
                                    key={a.url}
                                    className='work_item card'
                                    href={a.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <div className='work_item-top'>
                                        <span className='work_beat'>{a.beat}</span>
                                        <FiArrowUpRight className='work_linkIcon' aria-hidden='true' />
                                    </div>
                                    <h3>{a.title}</h3>
                                    <p className='work_outlet'>
                                        {a.outlet}
                                        {a.date && <em className='work_date'>{a.date}</em>}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </>
                )}

                {tab === 'projects' && (
                    <div className='work_grid work_grid--projects'>
                        {PROJECTS.map((p) => (
                            <article key={p.title} className='work_item card work_project'>
                                <span className='work_beat'>{p.org}</span>
                                <h3>{p.title}</h3>
                                <p className='work_blurb'>{p.blurb}</p>
                                <div className='work_figures'>
                                    {p.figures.map((f) => (
                                        <span key={f} className='work_figure'>{f}</span>
                                    ))}
                                </div>
                                <div className='work_tech'>
                                    {p.tech.map((t) => (
                                        <span key={t} className='work_tag'>{t}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Work
