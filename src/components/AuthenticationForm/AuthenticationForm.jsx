import React, { useState } from 'react'

import { Text, TextInput, PasswordInput, Button, Container } from '@mantine/core'

import AuthService from '../../API/AuthService'
import useToken from '../../hooks/useToken'

import Body from '../Body/Body'

import styles from './AuthenticationFormStyle.module.css'

const AuthenticationForm = ({ width, setIsLogined }) => {

    const [token, setToken, role, setRole, id, setId] = useToken()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    const auth = async () => {
        try {
            const resp = await AuthService.login({ login, password })
            console.log(resp)
            setToken(resp.token)
            setId(resp.id)
            setRole(resp.user_role)
            setIsLogined(true)
        } catch (e) {
            setLoginError('Проверьте правильность введенных данных' + e)
        }
        console.log('fuck');
    }

    return (
        <Body width={width}>
            <Container className={styles.authContainer}>
                <div className={styles.authDiv}>
                    <Text>Вход</Text>
                    <TextInput label='Логин' onChange={e => setLogin(e.target.value)} />
                    <PasswordInput label='Пароль' onChange={e => setPassword(e.target.value)} />
                    <Text color='red'>{loginError}</Text>
                    <Button onClick={auth}>Вход</Button>
                </div>
            </Container>
        </Body>
    )
}

export default AuthenticationForm