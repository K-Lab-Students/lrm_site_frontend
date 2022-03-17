import React from 'react'

import { Container, Avatar, Text, Group, Button, TextInput, Grid } from '@mantine/core'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Body from '../components/Body/Body'
import UserProfileMenu from './UserProfileMenu'

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
                <Grid.Col span={4}>
                    <UserProfileMenu />
                </Grid.Col>
                <Grid.Col span={8}>
                    <Group direction="column">
                        <Switch>
                            <Route path='/lk/settings'>
                                <h3 style={{margin: 0}}>Настройки</h3>
                                Фамилия
                                <TextInput style={{width: 500}}></TextInput>
                                Имя
                                <TextInput style={{width: 500}}></TextInput>
                                Отчество
                                <TextInput style={{width: 500}}></TextInput>
                                Дата рождения
                                <TextInput style={{width: 500}}></TextInput>
                            </Route>
                            <Route path='/lk/my-projects'>
                                <Text>my-projects</Text>
                            </Route>
                            <Route path='/lk/my-posts'>
                                <Text>my-posts</Text>
                            </Route>
                        </Switch>
                    </Group>
                </Grid.Col>
            </Grid>
        </Body>
    )
}

export default UserProfile