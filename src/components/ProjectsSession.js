import React from 'react'

import projects from '../projects';
import Project from './Project';

function ProjectsSession() {
    return (
        <div>
            <div className='projectsSession'>

                <header>
                    <h2>Projects</h2>
                </header>

                <div className="projectsSessionList">
                    {projects.map((pjt, index) => <Project
                        imgSource={pjt.imgSource}
                        title={pjt.title}
                        description={pjt.description}
                        repository={pjt.repository}
                        preview={pjt.preview}

                    />)}

                </div>

            </div>
        </div>
    )
}

export default ProjectsSession
