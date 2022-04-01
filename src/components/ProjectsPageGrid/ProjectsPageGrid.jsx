import React, { useState, useEffect } from 'react'

import Body from '../Body/Body'
import Project from './Project'

import ProjectsService from '../../API/ProjectsService'

import { useFetching } from '../../hooks/useFetching'

const ProjectsPageGrid = ({ width }) => {

    const [projects, setProjects] = useState([])
    const [fetchProjects, isNewsLoading, projectsError] = useFetching(async () => {
        const proj = await ProjectsService.getProjects()
        setProjects(proj)
    })

    useEffect(() => {
        fetchProjects();
    }, [])

    let projectIter = 0

    return (
        <Body width={width}>
            <center>
                <h1>Наши проекты</h1>
            </center>
            {isNewsLoading
                ? <h1>АААА ИДЕТ ЗАГРУЗКА ПРОЕКТОВ АААА</h1>
                : projects.map(project =>
                    <Project imageLeftPos={projectIter++ % 2} project={project} key={project.id} />
                )
            }
        </Body>
    )
}

export default ProjectsPageGrid