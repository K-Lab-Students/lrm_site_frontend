import React from 'react'

import { MediaQuery } from '@mantine/core'

import styles from './AboutPageGridStyle.module.css'

import PersonCard from './PersonCard'

const AboutPageGrid = ({ width }) => {
    return (
        <MediaQuery smallerThan={width + 40} styles={{ width: 'auto !important' }}>
            <div className={styles.postGrid} style={{ width: width }}>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
            </div>
        </MediaQuery>
    )
}

export default AboutPageGrid