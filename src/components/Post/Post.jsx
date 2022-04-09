import React, { useState } from 'react'

import { Container, Text, Divider, Group, TypographyStylesProvider, Button, ActionIcon, Modal } from '@mantine/core'


import { X, Pencil } from 'tabler-icons-react';

import styles from './PostStyle.module.css'

import NewsService from '../../API/NewsService'

const Post = ({ postData, setModalOpened, setPostBody, setNewsId }) => {

    const baseUrl = NewsService.host

    const editButtonCB = (e) => {
        e.preventDefault()
        setModalOpened(true)
        setNewsId(postData.id)
        setPostBody(postData.body)
    }

    const deleteButtonCB = async (e) => {
        NewsService.deleteById(postData.id)
        window.location.reload()
    }

    return (
        <div className={[styles.card]}>
            {JSON.parse(localStorage.getItem('role')) === 0
                ?
                (< div style={{ margin: '0 0 0 auto', height: 'auto' }}>
                    <Group spacing='xs'>
                        <ActionIcon color={'green'} onClick={editButtonCB}><Pencil /></ActionIcon>
                        <ActionIcon color={'red'} onClick={deleteButtonCB}><X /></ActionIcon>
                    </Group>
                </div>)
                : (<>
                </>)
            }

            <div className={styles.cardBody}>
                {/* <Group grow> */}
                    <TypographyStylesProvider>
                        <div dangerouslySetInnerHTML={{ __html: postData.body }} />
                    </TypographyStylesProvider>
                {/* </Group> */}
            </div>
        </div >
    )
}

export default Post