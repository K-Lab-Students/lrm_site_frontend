import React from 'react'

import { Container, Group, Text } from '@mantine/core'
import NetworkCommon from '../../common/NetworkCommon'

const Comptetition = ({ imageLeftPos, competition }) => {

    const host = NetworkCommon.serverHost

    return (
        <Container>
            <Group>
                {imageLeftPos
                    ? <>
                        <Container>
                            <img src={host + competition.files[0].file_path} width={500} alt='comp' />
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
                            <img src={host + competition.files[0].file_path} width={500} alt='comp' />
                        </Container>
                    </>
                }
            </Group>
        </Container>
    )
}

export default Comptetition