import React from 'react'

import { Container, Group, Text } from '@mantine/core'

const Project = ({ imageLeftPos, project }) => {
    return (
        <Container>
            <Group>
                {imageLeftPos
                    ? <>
                        <Container>
                            {/* <img src={project.photoUrls[0].url} width={500} alt='project' /> */}
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
                            {/* <img src={project.photoUrls[0].url} width={500} alt='project' /> */}
                        </Container>
                    </>
                }
            </Group>
        </Container>
    )
}

export default Project