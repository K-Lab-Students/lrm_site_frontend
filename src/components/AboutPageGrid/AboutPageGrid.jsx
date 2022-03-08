import React from 'react'

import { MediaQuery, Grid } from '@mantine/core'

import styles from './AboutPageGridStyle.module.css'

import PersonCard from './PersonCard'

const AboutPageGrid = ({ width }) => {
    return (
        <MediaQuery smallerThan={width + 40} styles={{ width: 'auto !important' }}>
            <div className={styles.aboutPageGrid} style={{ width: width }}>
                <Grid columns={12}>
                    <Grid.Col xs={5} sm={4} md={3} style={{margin: 'auto'}}>
                        <PersonCard />
                    </Grid.Col>
                    <Grid.Col xs={5} sm={4} md={3} style={{margin: 'auto'}}>
                        <PersonCard />
                    </Grid.Col>
                    <Grid.Col xs={5} sm={4} md={3} style={{margin: 'auto'}}>
                        <PersonCard />
                    </Grid.Col>
                    <Grid.Col xs={5} sm={4} md={3} style={{margin: 'auto'}}>
                        <PersonCard />
                    </Grid.Col>
                    <Grid.Col xs={5} sm={4} md={3} style={{margin: 'auto'}}>
                        <PersonCard />
                    </Grid.Col>
                    <Grid.Col xs={5} sm={4} md={3} style={{margin: 'auto'}}>
                        <PersonCard />
                    </Grid.Col>
                </Grid>
            </div>
        </MediaQuery>
    )
}

export default AboutPageGrid