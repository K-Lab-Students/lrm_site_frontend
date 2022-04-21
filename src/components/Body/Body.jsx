import React from 'react'

import { MediaQuery } from '@mantine/core'

import styles from './Body.module.css'

const Body = ( {width, children} ) => {
    return (
        <MediaQuery smallerThan={width + 40} styles={{ width: 'auto !important' }}>
            <div className={styles.body} style={{ width: width }}>
                {children}
            </div>
        </MediaQuery>
    )
}

export default Body