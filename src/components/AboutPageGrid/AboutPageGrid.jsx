import React, { useEffect, useState } from 'react'

import { Grid, MantineProvider, Text } from '@mantine/core'

import PersonCard from './PersonCard'
import Body from '../Body/Body'
import { useFetching } from '../../hooks/useFetching'
import UsersService from '../../API/UsersService'

import styles from './AboutPageGridStyle.module.css'

const AboutPageGrid = ({ width }) => {

    const [users, setUsers] = useState([])
    const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
        const response = await UsersService.get()
        setUsers(response)
    })

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <MantineProvider
            theme={{
                breakpoints: {
                    xs: 500
                }
            }}
        >
            <Body width={width} pageName='О нас'>
                <Grid columns={15} style={{ zIndex: 0 }}>
                    {
                        users.map(user => {
                            return (<Grid.Col
                                xs={5}
                                sm={4}
                                md={3}
                                style={{ margin: 'auto' }}
                                children={
                                    <PersonCard person={user} />
                                }
                                key={user.id}
                            />)
                        }
                        )}
                </Grid>
            </Body>
        </MantineProvider>
    )
}

export default AboutPageGrid