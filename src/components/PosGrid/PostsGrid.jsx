import React, { useEffect, useState } from 'react'

import Post from '../Post/Post'
import Body from '../Body/Body'

import NewsService from '../../API/NewsService'

import { useFetching } from '../../hooks/useFetching'

import axios from 'axios'

const PostsGrid = ({ width }) => {
    const [posts, setPosts] = useState([])
    const [fetchNews, isNewsLoading, newsError] = useFetching(async () => {
        const news = await NewsService.getNews()
        setPosts(news)
    })

    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <Body width={width}>
            {newsError && 
                <h1>АААА ${newsError} АААА</h1>
            }
            {isNewsLoading
                ? <h1>АААА ИДЕТ ЗАГРУЗКА НОВОСТЕЙ АААА</h1>
                : posts.map(post =>
                    <Post postData={post} key={post.id} />
                )
            }
        </Body>
    )
}

export default PostsGrid