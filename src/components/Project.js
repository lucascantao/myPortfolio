import React from 'react'
import styles from '../styles/Project.module.css';

function Project({ imgSource, title, description, repository, preview }) {
    return (
        <div className={styles.projectContainer}>


            <div className={styles.imgContainer}>
                <img src={imgSource} alt="" />

            </div>

            <div>
                <h2>{title}</h2>
                <p>{description}</p>

                <div className={styles.projectLinks}>
                    <a href={preview} rel='noreferrer' target='_blank'>View Project</a>
                    <a href={repository} rel='noreferrer' target='_blank'>View Repository</a>

                </div>
            </div>

        </div>
    )
}

export default Project
