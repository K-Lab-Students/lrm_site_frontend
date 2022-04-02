import React from 'react'

import { Container, Text, Divider, Group } from '@mantine/core'

import styles from './PostStyle.module.css'

import NewsService from '../../API/NewsService'

const Post = ({ postData }) => {

    const baseUrl = NewsService.host

    return (
        // <Container className={styles.post}>
        //     <Group >
        //         <Text size='xl'>{postData.name}</Text>
        //         {/* {postData.userId.map(tagName => <Badge color='pink'>{tagName}</Badge>)} */}

        //     </Group>
        //     <Divider />
        //     <Text>{postData.body}</Text>
        // </Container>

        <div className={[styles.card]}>
            <div className={styles.cardHeader}>
                {postData.name}
            </div>
            <div className={styles.cardBody}>
                <Group grow>
                    <img src={baseUrl + postData.files[0].file_path} width={200} alt='some' />
                    <div style={{textAlign: 'center'}}>
                        {postData.body}
                    </div>
                </Group>
            </div>
        </div>
    )
}

export default Post