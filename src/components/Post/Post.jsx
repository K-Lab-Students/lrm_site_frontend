import React from 'react'

import { Container, Text, Divider } from '@mantine/core'

import styles from './PostStyle.module.css'

const Post = ({ postData }) => {
    return (
        <Container className={styles.post}>
            <Text size='xl'>{postData.title}</Text>
            <Divider />
            <Text>{postData.content}</Text>
        </Container>
    )
}

export default Post