import React, { useEffect, useState } from 'react'

import Post from '../Post/Post'
import Body from '../Body/Body'

import { Container, Text, Divider, Group, TypographyStylesProvider, Button, ActionIcon, Modal, Loader } from '@mantine/core'
import RichTextEditor, { RichTextEditorLabels } from '@mantine/rte'

import NewsService from '../../API/NewsService'

import { useFetching } from '../../hooks/useFetching'
import PostTextParser from '../../libs/PostTextParser'

const PostsGrid = ({ width }) => {
    const [posts, setPosts] = useState([])
    const [modalOpened, setModalOpened] = useState(false)
    const [postBody, setPostBody] = useState('')
    const [newsId, setNewsId] = useState(0)
    const [fetchNews, isNewsLoading, newsError] = useFetching(async () => {
        const news = await NewsService.get()
        setPosts(news)
    })

    let PostParser = new PostTextParser

    let newsIterator = 0

    useEffect(() => {
        fetchNews();
        newsIterator = 0
    }, [])

    return (
        <Body width={width} pageName='Новости'>
            <Modal
                hideCloseButton={true}
                size='lg'
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
            >
                <RichTextEditor value={postBody} defaultValue={posts.body} onChange={setPostBody} sticky={true} />

                <Group>
                    <Button type='submit' onClick={async () => {
                        console.log(PostParser.deleteHostFromPath(postBody));
                        await NewsService.updateById(newsId, { id: 0, name: '', body: PostParser.deleteHostFromPath(postBody) })
                        setModalOpened(false)
                        window.location.reload()
                    }}>Добавить</Button>
                    <Button onClick={() =>
                        setModalOpened(false)}
                    >Отмена</Button>
                </Group>
            </Modal>

            {newsError &&
                <h1>АААА ${newsError} АААА</h1>
            }
            {isNewsLoading
                ? <center><Loader /></center>
                : posts.map(post => {
                    newsIterator++
                    return <Post postData={post} key={post.id} setModalOpened={setModalOpened} setPostBody={setPostBody} setNewsId={setNewsId} addUnderLine/>
                })
            }
        </Body>
    )
}

export default PostsGrid