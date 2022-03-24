import { Container, Group, Text } from '@mantine/core'
import React from 'react'

const Project = ({ imageLeftPos, project }) => {
    return (
        <Container>
            <Group>
                {imageLeftPos
                    ? <>
                        <Container>
                            <img src={project.photoUrls[0].url} width={500} />
                        </Container>
                        <Container>
                            <Text>{project.name}</Text>
                            <Text>{project.summary}</Text>
                        </Container>
                    </>
                    : <>
                        <Container>
                            <Text>{project.name}</Text>
                            <Text>{project.summary}</Text>
                        </Container>
                        <Container>
                            <img src={project.photoUrls[0].url} width={500} />
                        </Container>
                    </>
                }
            </Group>
        </Container>
    )
}

export default Project