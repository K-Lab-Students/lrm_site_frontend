import React from 'react'

import { Text, Group, TypographyStylesProvider, ActionIcon } from '@mantine/core'

import styles from './PostStyle.module.css'

import NewsService from '../../API/NewsService'

import CloseIcon from '../../pics/Close.svg'
import EditIcon from '../../pics/Edit-2.svg'

const Post = ({ postData, setModalOpened, setPostBody, setNewsId }) => {

    // const baseUrl = NewsService.host

    const editButtonCB = (e) => {
        e.preventDefault()
        setModalOpened(true)
        setNewsId(postData.id)
        setPostBody(postData.body)
    }

    const deleteButtonCB = async (e) => {
        await NewsService.deleteById(postData.id)
        window.location.reload()
    }

    // console.log(postData.body);

    return (
        <div className={[styles.card]}>
            {JSON.parse(localStorage.getItem('role')) === 0 || JSON.parse(localStorage.getItem('id')) === postData.author_id
                ?
                (< div style={{ margin: '0 0 0 auto', height: 'auto' }}>
                    <Group spacing={1}>
                        <ActionIcon color={'green'} onClick={editButtonCB}><img src={EditIcon} /></ActionIcon>
                        <ActionIcon color={'red'} onClick={deleteButtonCB}><img src={CloseIcon} /></ActionIcon>
                    </Group>
                </div>)
                : (<>
                </>)
            }

            <div className={styles.cardBody}>
                <Group grow>
                    <TypographyStylesProvider>
                        <div dangerouslySetInnerHTML={{ __html: postData.body }} />
                    </TypographyStylesProvider>
                </Group>
            </div>

            <Group grow>
                <div style={{ margin: '0 5px 5px auto', height: 'auto' }}>
                    <Text color='gray'>{postData.author_name}</Text>
                </div>

                <div style={{ margin: '0 5px 5px auto', height: 'auto' }}>
                    <Text color='gray'>{postData.create_date.split('T')[0]}</Text>
                </div>
            </Group>

        </div >
    )
}

export default Post