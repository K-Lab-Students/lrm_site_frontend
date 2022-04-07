import React from 'react'

import { Container, Text, Divider, Group, TypographyStylesProvider } from '@mantine/core'

import styles from './PostStyle.module.css'

import NewsService from '../../API/NewsService'

const Post = ({ postData }) => {

    const baseUrl = NewsService.host

    return (
        <div className={[styles.card]}>
            {/* <div className={styles.cardHeader}>
                {postData.name}
            </div> */}
            <div className={styles.cardBody}>
                <Group grow>
                    <TypographyStylesProvider>
                        <div dangerouslySetInnerHTML={{ __html: postData.body }} />
                    </TypographyStylesProvider>
                </Group>
            </div>
        </div>
    )
}

export default Post