import React, { useEffect, useState } from 'react'

import { Text, Group, TypographyStylesProvider, ActionIcon, Divider, Image, Title } from '@mantine/core'

import styles from './PostStyle.module.css'

import NewsService from '../../API/NewsService'

import CloseIcon from '../../pics/Close.svg'
import EditIcon from '../../pics/Edit-2.svg'
import PostTextParser from '../../libs/PostTextParser'
import NetworkCommon from '../../common/NetworkCommon'
import { TemperatureCelsius } from 'tabler-icons-react'

const Post = ({ postData, setModalOpened, setPostBody, setNewsId, addUnderLine }) => {

    const [internalBody, setInternalBody] = useState(postData.body)
    const [firstImage, setFirstImage] = useState('')
    const [title, setTitle] = useState('')

    var PostParser = new PostTextParser

    const editButtonCB = (e) => {
        e.preventDefault()
        setModalOpened(true)
        setNewsId(postData.id)
        setPostBody(PostParser.updateImagesPath(postData.body))
    }

    const deleteButtonCB = async (e) => {
        await NewsService.deleteById(postData.id)
        window.location.reload()
    }

    useEffect(() => {
        // setInternalBody(PostParser.updateImagesPath(postData.body))
        let tmp = PostParser.getFirstImageLink(postData.body)
        if (tmp !== '')
            setFirstImage(NetworkCommon.serverHost + tmp)
        tmp = PostParser.getTitle(postData.body)
        if (tmp !== '')
            setTitle(tmp)
        setInternalBody(PostParser.getPostPreview(postData.body))
    }, [])

    console.log(firstImage);

    return (
        <>
            <div className={styles.post}>
                <div>
                    <Image
                        src={firstImage}
                        width={379}
                        height={213}
                        alt='post_image'
                    />
                </div>

                <div className={styles.post}>
                    <div className={styles.contentBody}>
                        <div className={styles.cardBody}>
                            <Text className={styles.titleStyle}>{title}</Text>
                            <TypographyStylesProvider>
                                <div className={styles.bodyContentStyle}
                                dangerouslySetInnerHTML={{ __html: internalBody }}

                                />
                            </TypographyStylesProvider>

                            <Text className={styles.authorNameStyle}>{postData.author_name}</Text>
                            <Text className={styles.dateStyle}>{postData.create_date.split('T')[0]}</Text>
                        </div>
                    </div>

                    <div>
                        {JSON.parse(localStorage.getItem('role')) === 0 || JSON.parse(localStorage.getItem('id')) === postData.author_id
                            ?
                            (<div className={styles.postButtonsStyle}>
                                <ActionIcon onClick={editButtonCB}>
                                    <img src={EditIcon} />
                                </ActionIcon>
                                <ActionIcon onClick={deleteButtonCB}>
                                    <img src={CloseIcon} />
                                </ActionIcon>
                            </div>)
                            : (<>
                            </>)
                        }
                    </div>

                </div>
            </div >
            {addUnderLine
                ? <Divider className={styles.dividerStyle}></Divider>
                : <></>
            }
        </>
    )
}

export default Post