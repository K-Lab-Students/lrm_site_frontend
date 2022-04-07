import React, { useState } from 'react'

import { Text, TextInput, PasswordInput, Button, Container } from '@mantine/core'

import AuthService from '../../API/AuthService'
import useToken from '../../hooks/useToken'

import Body from '../Body/Body'

import styles from './ReginstrationPageStyle.module.css'

const ReginstrationPage = ({ width, setIsLogined }) => {

    const [token, setToken, role, setRole, id, setId] = useToken()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    const registration = async () => {
        try {
            const resp = await AuthService.registration({ login, password })
            console.log(resp);
            setToken(resp.token)
            setId(resp.id)
            setRole(resp.user_role)
            setIsLogined(true)
        } catch (e) {
            setLoginError('Пользователь с таким логином существует' + e)
        }
    }

    return (
        <Body width={width}>
            <Container className={styles.regContainer}>
                <div className={styles.regDiv}>
                    <Text>Регистрация</Text>
                    <TextInput label='Логин' onChange={e => setLogin(e.target.value)} />
                    <PasswordInput label='Пароль' onChange={e => setPassword(e.target.value)} />
                    <Text color='red'>{loginError}</Text>
                    <Button onClick={registration} type="submit">Регистрация</Button>
                </div>
            </Container>
        </Body>
    )
}

export default ReginstrationPage

//x-token: 
//user_id: 