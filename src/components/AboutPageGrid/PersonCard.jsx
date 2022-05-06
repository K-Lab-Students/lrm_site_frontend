import React from 'react'

import { Card, Text, Badge, Avatar } from '@mantine/core'

import styles from './PersonCardStyle.module.css'

import NetworkCommon from '../../common/NetworkCommon'

const PersonCard = ({ person }) => {

    const baseUrl = NetworkCommon.serverHost

    return (
        <div className={styles.personCard}>
            <div className={styles.userAvatarDiv}>
                <center>
                    <Avatar size={301} radius='xs' alt='user-avatar' src={baseUrl + person.files[0].file_path}>{person.sname[0] + '-' + person.name[0]}</Avatar>
                </center>
            </div>
            <Text className={styles.textNameStyle}>
                {person.sname + ' ' + person.name}
            </Text>
            <Text className={styles.textStudyStyle}>
                {person.faculty_name}, {person.study_place_name}
            </Text>
            {person.competitions.map(comp => {
                return (<Badge className={styles.badgeStyle} radius="xs" color={comp.color} variant='light' key={comp.id}>
                    {comp.name}
                </Badge>)
            })}
        </div>
    )
}

export default PersonCard