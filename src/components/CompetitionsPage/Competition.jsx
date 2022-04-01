import React from 'react'

import { Container, Group, Text } from '@mantine/core'

const Comptetition = ({ imageLeftPos, competition }) => {
    return (
        <Container>
            <Group>
                {imageLeftPos
                    ? <>
                        <Container>
                            <img src={competition.img} width={500} alt='comp' />
                        </Container>
                        <Container>
                            <Text>{competition.name}</Text>
                            <Text>{competition.body}</Text>
                        </Container>
                    </>
                    : <>
                        <Container>
                            <Text>{competition.name}</Text>
                            <Text>{competition.body}</Text>
                        </Container>
                        <Container>
                            <img src={competition.img} width={500} alt='comp' />
                        </Container>
                    </>
                }
            </Group>
        </Container>
    )
}

export default Comptetition