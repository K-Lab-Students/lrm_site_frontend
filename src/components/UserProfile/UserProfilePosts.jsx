import React, { useState } from 'react'

import { Button, TextInput, Modal, Textarea, Group } from '@mantine/core'
import RichTextEditor, { RichTextEditorLabels } from '@mantine/rte'
import NewsService from '../../API/NewsService'

const UserProfilePosts = () => {

    const [modalOpened, setModalOpened] = useState(false)
    const [postBody, setPostBody] = useState('')
    const [postTitle, setPostTitle] = useState('')

    return (
        <div>
            <Button onClick={() => setModalOpened(true)}>Добавить новость</Button>
            <Modal
                hideCloseButton={true}
                size='lg'
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
            >
                <RichTextEditor value={postBody} onChange={setPostBody} sticky={true} />
                <Group>
                    <Button onClick={() => {
                        NewsService.addNews({ id: 0, name: postTitle, body: postBody })
                        setModalOpened(false)
                    }}>Добавить</Button>
                    <Button onClick={() =>
                        setModalOpened(false)}
                    >Отмена</Button>
                </Group>
            </Modal>
        </div>
    )
}

export default UserProfilePosts