import React, { useEffect, useState } from 'react'

import { Container, Avatar, Group, Grid } from '@mantine/core'
import { Redirect, Route, Switch } from 'react-router-dom'

import Body from '../Body/Body'
import UserProfileMenu from './UserProfileMenu'
import UserProfileSettings from './UserProfileSettings'
import UserProfileProjects from './UserProfileProjects'
import UserProfilePosts from './UserProfilePosts'
import { useFetching } from '../../hooks/useFetching'
import UsersService from '../../API/UsersService'
import NetworkCommon from '../../common/NetworkCommon'

const UserProfile = ({ width }) => {

    const [imagePath, setImagePath] = useState('')
    const [userLogin, setUserLogin] = useState('')
    const [name, setName] = useState('')

    const host = NetworkCommon.serverHost

    const [fetchUser, isLoading, error] = useFetching(async () => {
        const resp = await UsersService.getById()

        setUserLogin(resp.email)
        setName(resp.sname[0] + '-' + resp.name[0])
        setImagePath(host + resp.files[0].file_path)
    })

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <Body width={width}>
            <Container>
                <Group>
                    <Avatar size={150} radius={150} alt='user-avatar' src={imagePath}>U-M</Avatar>
                    <h1>{userLogin}</h1>
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
                            {/* <Route path='/lk/my-projects'>
                                <UserProfileProjects />
                            </Route> */}
                            <Route path='/lk/my-posts'>
                                <UserProfilePosts />
                            </Route>
                            <Route path='*'>
                                <Redirect to='/lk/settings' />
                            </Route>
                        </Switch>
                    </Group>
                </Grid.Col>
            </Grid>
        </Body>
    )
}

export default UserProfile