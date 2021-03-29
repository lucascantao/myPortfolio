import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import styles from '../styles/Contact.module.css';

function ContactSession() {

    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('portfolio_gmail', 'template_kvnjeww', e.target, 'user_UG8dqaQNZpd37ACJ0PkRc')
            .then(result => {
                setMessage('Thanks, have a nice day!')
            }, error => {
                setMessage('Ops! something went wrong!')
            })
    }

    return (
        <div className={styles.contactSession}>
            <header><h2>Contact</h2></header>


            <form className={styles.contactForm} onSubmit={sendEmail}>

                <h3>{message}</h3>
                <div className={styles.formBody}>


                    <input type="text" placeholder='your name' name='name' />
                    <input type="email" placeholder='your email' name='email' />



                    <input type="text" placeholder='subject' name='subject' />
                    <textarea placeholder='your message' name="message"></textarea>

                </div>

                <button type='submit'>Send</button>

            </form>
        </div>
    )
}

export default ContactSession
