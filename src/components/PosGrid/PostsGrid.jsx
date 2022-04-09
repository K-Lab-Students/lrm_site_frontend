import React, { useEffect, useState } from 'react'

import Post from '../Post/Post'
import Body from '../Body/Body'

import { Container, Text, Divider, Group, TypographyStylesProvider, Button, ActionIcon, Modal } from '@mantine/core'
import RichTextEditor, { RichTextEditorLabels } from '@mantine/rte'

import NewsService from '../../API/NewsService'

import { useFetching } from '../../hooks/useFetching'

const PostsGrid = ({ width }) => {
    const [posts, setPosts] = useState([])
    const [modalOpened, setModalOpened] = useState(false)
    const [postBody, setPostBody] = useState('')
    const [newsId, setNewsId] = useState(0)
    const [fetchNews, isNewsLoading, newsError] = useFetching(async () => {
        const news = await NewsService.get()
        setPosts(news)
    })

    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <Body width={width}>
            <Modal
                hideCloseButton={true}
                size='lg'
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
            >
                <RichTextEditor value={postBody} defaultValue={posts.body} onChange={setPostBody} sticky={true} />
                <Group>
                    <Button type='submit' onClick={() => {
                        NewsService.updateById(newsId, { id: 0, name: '', body: postBody })
                        setModalOpened(false)
                    }}>Добавить</Button>
                    window.location.reload()
                    <Button onClick={() =>
                        setModalOpened(false)}
                    >Отмена</Button>
                </Group>
            </Modal>


            {newsError &&
                <h1>АААА ${newsError} АААА</h1>
            }
            {isNewsLoading
                ? <h1>АААА ИДЕТ ЗАГРУЗКА НОВОСТЕЙ АААА</h1>
                : posts.map(post => {
                    return <Post postData={post} key={post.id} setModalOpened={setModalOpened} setPostBody={setPostBody} setNewsId={setNewsId} />
                })
            }
        </Body>
    )
}

export default PostsGrid