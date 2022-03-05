import React, { useState } from 'react'

import { MediaQuery } from '@mantine/core'
import Post from './Post'

import styles from './PostGridStyle.module.css'

const PostsGrid = () => {

    const postsBlogWidth = 1000

    const [posts, setPosts] = useState([
        { id: Date.now() - 500, title: 'Wow', content: 'Content' },
        { id: Date.now() - 300, title: 'Title', content: 'wowowowow' },
        { id: Date.now() - 100, title: '1234', content: 'contentcontent' }
    ])

    return (
        <MediaQuery smallerThan={postsBlogWidth + 40} styles={{ width: 'auto !important' }}>
            <div className={styles.postGrid} style={{ width: postsBlogWidth }}>
                {posts.map(post =>
                    <Post postData={post} key={post.id} />
                )}
            </div>
        </MediaQuery>
    )
}

export default PostsGrid