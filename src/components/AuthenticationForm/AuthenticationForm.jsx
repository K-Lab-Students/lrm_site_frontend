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
            setToken(resp.token)
            setId(resp.id)
            setRole(resp.user_role)
            setIsLogined(true)
        } catch (e) {
            setLoginError('Проверьте правильность введенных данных' + e)
        }
    }

    return (
        <Body width={width} pageName='Вход'>
            <Container className={styles.authContainer}>
                <div className={styles.authDiv}>
                    <Text className={styles.authFontLogin}>Логин</Text>
                    <input type='text' className={styles.authTextInput} onChange={e => setLogin(e.target.value)} />
                    <Text className={styles.authFontPass}>Пароль</Text>
                    <input type='password' className={styles.authTextInput} onChange={e => setPassword(e.target.value)} />
                    <Text color='red'>{loginError}</Text>
                    <Button className={styles.authButton} onClick={auth}>Вход</Button>
                </div>
            </Container>
        </Body>
    )
}

export default AuthenticationForm