import React from 'react'
import './resume.css'
import CV from '../../assets/cv.pdf'
import { FiDownload } from 'react-icons/fi'
import { HiOutlineDocumentText } from 'react-icons/hi'

const HIGHLIGHTS = [
    { k: 'Manhattan Institute', v: 'Data & Software Engineer, 2024 to present' },
    { k: 'Compact Magazine', v: 'Web developer on contract, 2025 to present' },
    { k: 'LS Direct Marketing', v: 'Financial Analyst, reporting to the CFO' },
    { k: 'Compass Group', v: 'Senior Payroll Analyst' },
    { k: 'Elon University', v: 'B.S. Finance, minor in Spanish' },
]

const Resume = () => {
    return (
        <section id='resume'>
            <h5>Experience and Education</h5>
            <h2>Resume</h2>

            <div className='container resume_container'>
                <div className='resume_summary card'>
                    <HiOutlineDocumentText className='resume_icon' aria-hidden='true' />
                    <h3>Full resume</h3>
                    <p>
                        Quantitative research, data engineering, and financial analysis,
                        with eleven published articles and reports. Available as a PDF.
                    </p>
                    <ul className='resume_list'>
                        {HIGHLIGHTS.map(({ k, v }) => (
                            <li key={k}>
                                <strong>{k}</strong>
                                <span>{v}</span>
                            </li>
                        ))}
                    </ul>
                    <div className='resume_cta'>
                        <a href={CV} download='Matias-Ahrensdorf-Resume.pdf' className='btn btn-primary'>
                            <FiDownload aria-hidden='true' /> Download PDF
                        </a>
                    </div>
                </div>

                <div className='resume_preview card'>
                    <object data={CV} type='application/pdf' aria-label='Resume preview'>
                        <div className='resume_fallback'>
                            <p>Your browser will not display the PDF inline.</p>
                            <a href={CV} download className='btn btn-primary'>Download the resume</a>
                        </div>
                    </object>
                </div>
            </div>
        </section>
    )
}

export default Resume
