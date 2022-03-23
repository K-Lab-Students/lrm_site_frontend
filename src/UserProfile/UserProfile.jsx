import React from 'react'

import { Container, Avatar, Text, Group, Button, TextInput, Grid } from '@mantine/core'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Body from '../components/Body/Body'
import UserProfileMenu from './UserProfileMenu'
import UserProfileSettings from './UserProfileSettings'
import UserProfileProjects from './UserProfileProjects'
import UserProfilePosts from './UserProfilePosts'

const UserProfile = ({ width }) => {
    return (
        <Body width={width}>
            <Container>
                <Group>
                    <Avatar size={150} radius={150} alt='user-avatar'>U-M</Avatar>
                    <h1>Имя пользователя</h1>
                </Group>
            </Container>
            <Grid align='flex-start' style={{ marginTop: 20 }}>
                <Grid.Col span={3}>
                    <UserProfileMenu />
                </Grid.Col>
                <Grid.Col span={8}>
                    <Group direction="column">
                        <Switch>
                            <Route exact path='/lk/settings'>
                                <UserProfileSettings />
                            </Route>
                            <Route path='/lk/my-projects'>
                                <UserProfileProjects />
                            </Route>
                            <Route path='/lk/my-posts'>
                                <UserProfilePosts />
                            </Route>
                            <Route path='*'>
                                Тут ничего нет((((((((((
                            </Route>
                        </Switch>
                    </Group>
                </Grid.Col>
            </Grid>
        </Body>
    )
}

export default UserProfile