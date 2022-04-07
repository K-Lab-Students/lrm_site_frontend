import React, { useEffect, useState } from 'react'

import Post from '../Post/Post'
import Body from '../Body/Body'

import NewsService from '../../API/NewsService'

import { useFetching } from '../../hooks/useFetching'

const PostsGrid = ({ width }) => {
    const [posts, setPosts] = useState([])
    const [fetchNews, isNewsLoading, newsError] = useFetching(async () => {
        const news = await NewsService.getNews()
        // const news = await NewsService.getNewsById(10)
        // await NewsService.addNews({id: 0, title: 'test', body: 'test'})
        // await NewsService.deleteNewsById(2)
        // await NewsService.updateNewsById(9, {id: 0, name: 'asdfhkjal;dg', body: '1239857342503=4'})

        // for (let i = 0; i < 20; ++i) {
            // await NewsService.updateNewsById(0, {id: 0, title: 'Post-1', body: 'Body-1'})
        // }
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
                : posts.map(post => {
                    return <Post postData={post} key={post.id} />
                })
            }
        </Body>
    )
}

export default PostsGrid