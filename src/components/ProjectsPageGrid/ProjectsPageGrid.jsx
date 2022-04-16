import React, { useState, useEffect } from 'react'

import Body from '../Body/Body'
import Project from './Project'

import ProjectsService from '../../API/ProjectsService'

import { useFetching } from '../../hooks/useFetching'

const ProjectsPageGrid = ({ width }) => {
    let projectIter = 0
    const [projects, setProjects] = useState([])
    const [fetchProjects, isNewsLoading, projectsError] = useFetching(async () => {
        const proj = await ProjectsService.get()
        setProjects(proj)
    })

    useEffect(() => {
        fetchProjects();
        projectIter = 0
    }, [])

    

    return (
        <Body width={width}>
            <center>
                <h1>Наши проекты</h1>
            </center>
            {/* {projectsError &&
                <h1>АААА ${projectsError} АААА</h1>
            } */}
            {projects.map(project =>
                <Project imageLeftPos={projectIter++ % 2} project={project} key={project.id} />
            )}
        </Body>
    )
}

export default ProjectsPageGrid