import React, { useState } from 'react'

import { Text, TextInput, PasswordInput, Button, Container } from '@mantine/core'

import AuthService from '../../API/AuthService'
import useToken from '../../hooks/useToken'

import Body from '../Body/Body'

import styles from './ReginstrationPageStyle.module.css'

const ReginstrationPage = ({ width, setIsLogined }) => {

    const [token, setToken, role, setRole] = useToken()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const registration = () => {
        // AuthService.registration()
        console.log('fuck');
        setIsLogined(true)
    }

    return (
        <Body width={width}>
            <Container className={styles.regContainer}>
                <div className={styles.regDiv}>
                    <Text>Регистрация</Text>
                    <TextInput label='Логин' onChange={setLogin} />
                    <PasswordInput label='Пароль' onChange={setPassword} />
                    <Button onClick={registration} type="submit">Регистрация</Button>
                </div>
            </Container>
        </Body>
    )
}

export default ReginstrationPage