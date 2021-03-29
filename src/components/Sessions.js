import React, { useContext } from 'react'
import { SessionContext } from '../context/SessionContext';
import styles from '../styles/Sessions.module.css'

import ContactSession from '../components/ContactSession'
import ProjectsSession from './ProjectsSession';
import HomeSession from './HomeSession';

function Sessions() {

    const { selectedSession } = useContext(SessionContext);

    return (
        <div className={styles.sessions}>

            {(selectedSession === 'Home') && <HomeSession />}

            {(selectedSession === 'Projects') && <ProjectsSession />}

            {(selectedSession === 'Contact') && <ContactSession />}

        </div>
    )
}

export default Sessions;
