import React from 'react'

import { MediaQuery, Text } from '@mantine/core'

import styles from './Body.module.css'

const Body = ( {width, children, pageName} ) => {
    return (
        <MediaQuery smallerThan={width + 40} styles={{ width: 'auto !important' }}>
            <div className={styles.body} style={{ width: width }}>
                <Text className={styles.pageNameStyle}>{pageName}</Text>
                {children}
            </div>
        </MediaQuery>
    )
}

export default Body