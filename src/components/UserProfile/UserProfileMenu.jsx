import React from 'react'

import { Text, Group, Button } from '@mantine/core'
import { Link } from 'react-router-dom'

import styles from './UserProfileMenuStyle.module.css'

const UserProfileMenu = () => {
    return (
        <Group direction="column" spacing='xs' style={{ width: 230 }} grow >
            <Link to='/lk/settings' children={
                <Button variant="subtle">
                    <Text className={styles.buttonsFont}>
                        Настройки
                    </Text>
                </Button>} />
{/* 
            <Link to='/lk/my-projects' children={
                <Button variant="subtle">
                    <Text size='lg'>
                        Мои проекты
                    </Text>
                </Button>} /> */}

            <Link to='/lk/my-posts' children={
                <Button variant="subtle">
                    <Text  className={styles.buttonsFont}>
                        Мои посты
                    </Text>
                </Button>} />
        </Group>
    )
}

export default UserProfileMenu