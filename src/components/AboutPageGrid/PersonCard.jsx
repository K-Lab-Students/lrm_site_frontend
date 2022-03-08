import React from 'react'

import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'
import { Container } from '@mantine/core'

import emptyAvatar from './emptyAvatar.png'

import styles from './PersonCardStyle.module.css'

const PersonCard = () => {

    return (
        <div style={{margin: '10px'}}>
            <Card className={styles.personCard} shadow="sm" padding="lg" withBorder>
                <div className={styles.userAvatarDiv} style={{ border: '1px solid black' }}>
                    <center>
                        <img src={emptyAvatar} className={styles.userAvatar} alt='user-avatar' />
                    </center>
                </div>
                <Text>
                    ФИО, годики
                </Text>
                <Text>
                    Вуз, факультет
                </Text>
                <Badge color='pink' variant='light'>
                    Компетенция
                </Badge>
            </Card>
        </div>
    )
}

export default PersonCard