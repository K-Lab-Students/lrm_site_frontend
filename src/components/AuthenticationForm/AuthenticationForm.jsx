import React, { useState } from 'react'

import { Text, TextInput, PasswordInput, Button, Container } from '@mantine/core'

import AuthService from '../../API/AuthService'
import useToken from '../../hooks/useToken'

import Body from '../Body/Body'

import styles from './AuthenticationFormStyle.module.css'

const AuthenticationForm = ({ width, setIsLogined }) => {

    const [token, setToken, role, setRole] = useToken()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const auth = () => {
        // AuthService.auth()
        console.log('fuck');
    }

    return (
        <Body width={width}>
            <Container className={styles.authContainer}>
                <div className={styles.authDiv}>
                    <Text>Вход</Text>
                    <TextInput label='Логин' onChange={setLogin} />
                    <PasswordInput label='Пароль' onChange={setPassword} />
                    <Button onClick={auth}>Вход</Button>
                </div>
            </Container>
        </Body>
    )
}

export default AuthenticationForm