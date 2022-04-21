import React from 'react'

import { Text, Group, Button } from '@mantine/core'
import { Link } from 'react-router-dom'

const UserProfileMenu = () => {
    return (
        <Group direction="column" spacing='xs' style={{ width: 230 }} grow >
            <Link to='/lk/settings' children={
                <Button variant="subtle">
                    <Text size='lg'>
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
                    <Text size='lg'>
                        Мои посты
                    </Text>
                </Button>} />
        </Group>
    )
}

export default UserProfileMenu