import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { ImWhatsapp } from 'react-icons/im'
import { useRef } from 'react'
import emailjs from 'emailjs-com'




const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xjo2nxh', 'template_jqqgy45', form.current, 'oIhxjHI-4xFtPuBRn')

        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <a href="mailto:matiasahrensdorf@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <RiMessengerLine className='contact_option-icon' />
                        <h4>Messenger</h4>
                        <a href="https://m.me/matias.ahrensdorf.1/" target="_blank">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <ImWhatsapp className='contact_option-icon' />
                        <h4>WhatsApp</h4>
                        <a href="https://api.whatsapp.com/send?phone=+17045752724" target="_blank">Send a message</a>
                    </article>
                </div>

                {/* End of Contact Options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows='7' placeholder='Your message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact