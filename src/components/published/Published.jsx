import React from 'react'
import './published.css'

const OUTLETS = [
    'The Wall Street Journal',
    'City Journal',
    'RealClear',
    'Compact',
    'Washington Examiner',
    'Manhattan Institute',
]

// Sits directly under the hero so the strongest credential is visible
// before a visitor has to scroll or read anything.
const Published = () => {
    return (
        <div className='published'>
            <div className='container published_inner'>
                <span className='published_label'>Published in</span>
                <ul className='published_list'>
                    {OUTLETS.map((o) => (
                        <li key={o}>{o}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Published
