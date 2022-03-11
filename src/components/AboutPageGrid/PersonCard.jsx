import React from 'react'

import { Card, Image, Text, Badge, Button, Group, Avatar } from '@mantine/core'
import { Container } from '@mantine/core'

import styles from './PersonCardStyle.module.css'

const PersonCard = () => {

    return (
        <div>
            <Card className={styles.personCard} shadow="sm" padding="lg" withBorder>
                <div className={styles.userAvatarDiv}>
                    <center>
                        <Avatar size={150} radius='xs' alt='user-avatar'>U-M</Avatar>
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