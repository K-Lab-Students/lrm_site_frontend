import React from 'react'

import { Card, Text, Badge, Avatar } from '@mantine/core'

import styles from './PersonCardStyle.module.css'

import UsersService from '../../API/UsersService'

const PersonCard = ({person}) => {

    const baseUrl = UsersService.host

    return (
        <div>
            <Card className={styles.personCard} shadow="sm" padding="lg" withBorder>
                <div className={styles.userAvatarDiv}>
                    <center>
                        <Avatar size={150} radius='xs' alt='user-avatar' src={baseUrl + person.files[0].file_path}>{person.sname[0] + '-' + person.name[0]}</Avatar>
                    </center>
                </div>
                <Text>
                    {person.sname + ' ' + person.name[0] + '. ' + person.pname[0] + '.'}
                </Text>
                <Text>
                    Вуз, факультет
                </Text>
                {/* <Badge color='pink' variant='light'>
                    Компетенция
                </Badge> */}
            </Card>
        </div>
    )
}

export default PersonCard