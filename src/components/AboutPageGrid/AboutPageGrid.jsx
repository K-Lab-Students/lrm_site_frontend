import React from 'react'

import { Grid, MantineProvider } from '@mantine/core'

import PersonCard from './PersonCard'
import Body from '../Body/Body'

const AboutPageGrid = ({ width }) => {
    return (
        <MantineProvider
            theme={{
                breakpoints: {
                    xs: 500
                }
            }}
        >
            <Body width={width}>
                <Grid columns={12} style={{ zIndex: 0 }}>
                    <Grid.Col xs={5} sm={4} md={3} style={{ margin: 'auto' }}>
                        <PersonCard />
                    </Grid.Col>
                    <Grid.Col xs={5} sm={4} md={3} style={{ margin: 'auto' }}>
                        <PersonCard />
                    </Grid.Col>
                    <Grid.Col xs={5} sm={4} md={3} style={{ margin: 'auto' }}>
                        <PersonCard />
                    </Grid.Col>
                    <Grid.Col xs={5} sm={4} md={3} style={{ margin: 'auto' }}>
                        <PersonCard />
                    </Grid.Col>
                    <Grid.Col xs={5} sm={4} md={3} style={{ margin: 'auto' }}>
                        <PersonCard />
                    </Grid.Col>
                    <Grid.Col xs={5} sm={4} md={3} style={{ margin: 'auto' }}>
                        <PersonCard />
                    </Grid.Col>
                </Grid>
            </Body>
        </MantineProvider>
    )
}

export default AboutPageGrid