import React, { useRef, useState } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { PROFILE } from '../../data/site'

const SERVICE_ID = 'service_xjo2nxh'
const TEMPLATE_ID = 'template_jqqgy45'
const PUBLIC_KEY = 'oIhxjHI-4xFtPuBRn'

const Contact = () => {
    const form = useRef()
    const [status, setStatus] = useState({ state: 'idle', message: '' })

    const sendEmail = async (e) => {
        e.preventDefault()
        setStatus({ state: 'sending', message: 'Sending...' })

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            setStatus({ state: 'sent', message: 'Thanks. Your message is on its way.' })
            form.current.reset()
        } catch (err) {
            setStatus({
                state: 'error',
                message: `Something went wrong. Email me directly at ${PROFILE.email}.`,
            })
        }
    }

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option card'>
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>{PROFILE.email}</h5>
                        <a href={`mailto:${PROFILE.email}`}>Send a message</a>
                    </article>


                    <article className='contact_option card'>
                        <FiPhone className='contact_option-icon' />
                        <h4>Phone</h4>
                        <h5>704-575-2724</h5>
                        <a href={`tel:${PROFILE.phone}`}>Call or text</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail} noValidate={false}>
                    <input type='text' name='name' placeholder='Your full name' required />
                    <input type='email' name='email' placeholder='Your email' required />
                    <textarea name='message' rows='7' placeholder='Your message' required></textarea>

                    <button
                        type='submit'
                        className='btn btn-primary'
                        disabled={status.state === 'sending'}
                    >
                        {status.state === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    <p
                        className={`contact_status contact_status--${status.state}`}
                        role='status'
                        aria-live='polite'
                    >
                        {status.message}
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Contact
