import React, { useEffect, useState } from 'react'

import { Button, Modal, Group, Divider } from '@mantine/core'
import RichTextEditor from '@mantine/rte'
import NewsService from '../../API/NewsService'
import { useFetching } from '../../hooks/useFetching'
import Post from '../Post/Post'

const UserProfilePosts = () => {

    const [postBody, setPostBody] = useState('')

    const [userPosts, setUserPosts] = useState([])

    const [modalOpened, setModalOpened] = useState(false)
    const [postId, setPostId] = useState(0)

    const [fetchPosts, postLoading, error] = useFetching(async () => {
        const userId = JSON.parse(localStorage.getItem('id'))
        const userPostsResp = await NewsService.get()
        setUserPosts(userPostsResp.filter(post => post.author_id === userId))
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            <h2>Создание новости</h2>
            <Divider style={{ marginBottom: 15, marginTop: 4 }} />

            <RichTextEditor value={postBody} onChange={setPostBody} sticky={true} />
            <Group>
                <Button onClick={async () => {
                    await NewsService.add({ id: 0, name: '', body: postBody })
                    window.location.reload()
                    console.log(postBody);
                }}>Создать запись</Button>
            </Group>
            <Modal
                hideCloseButton={true}
                size='lg'
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
            >
                <RichTextEditor value={postBody} defaultValue={userPosts.body} onChange={setPostBody} sticky={true} />

                <Group>
                    <Button type='submit' onClick={async () => {
                        console.log(postBody);
                        await NewsService.updateById(postId, { id: 0, name: '', body: postBody })
                        setModalOpened(false)
                        window.location.reload()
                    }}>Добавить</Button>
                    <Button onClick={() =>
                        setModalOpened(false)}
                    >Отмена</Button>
                </Group>
            </Modal>
            <h2>Новости пользователя</h2>
            <Divider style={{ marginBottom: 15, marginTop: 4 }} />
            {userPosts.map(post => {
                return <Post postData={post} key={post.id} setModalOpened={setModalOpened} setPostBody={setPostBody} setNewsId={setPostId} />
            })}
        </div>
    )
}

export default UserProfilePosts