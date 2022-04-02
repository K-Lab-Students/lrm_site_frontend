import React from 'react'

import { Container, Divider, Group, Text } from '@mantine/core'

import ProjectsService from '../../API/ProjectsService'

const Project = ({ imageLeftPos, project }) => {
    const baseUrl = ProjectsService.host
    return (
        <Container>
            <Group style={{ marginTop: 10, marginBottom: 20 }}>
                {imageLeftPos
                    ? <>
                        <Container>
                            <img src={baseUrl + project.files[0].file_path} width={500} alt='project' />
                        </Container>
                        <Container>
                            <Text>{project.name}</Text>
                            <Text>{project.body}</Text>
                        </Container>
                    </>
                    : <>
                        <Container>
                            <Text>{project.name}</Text>
                            <Text>{project.body}</Text>
                        </Container>
                        <Container>
                            <img src={baseUrl + project.files[0].file_path} width={500} alt='project' />
                        </Container>
                    </>
                }
            </Group>
        </Container>
    )
}

export default Project