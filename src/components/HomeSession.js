import React from 'react'
import styles from '../styles/Sessions.module.css'

import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function HomeSession() {
    return (
        <div className="homeSession">

            <header>
                <h2>Resume</h2>
            </header>

            <main className={styles.homeSessionBody}>

                <div className="leftContainer">
                    <img src="Perfil_github_1.jpg" alt="" />
                </div>

                <div className={styles.rightContainer}>
                    <p>Hi!</p>
                    <p> My name is Lucas, i am a IT student and front-end web developer. Needing a web site for your business or personal project ? Get in contact with me by sending a e-mail</p>

                    <div className={styles.socialLinks}>
                        <a href="https://facebook.com/lucas.cantao.92"><FaFacebook /></a>
                        <a href="https://github.com/lucascantao"><FaGithub /></a>
                    </div>
                </div>

            </main>

        </div>
    )
}

export default HomeSession
