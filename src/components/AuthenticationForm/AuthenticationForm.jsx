import React from 'react'

import { Text, TextInput, PasswordInput, Button, Container } from '@mantine/core'

import Body from '../Body/Body'

import styles from './AuthenticationFormStyle.module.css'

const AuthenticationForm = ({ width }) => {
    return (
        <Body width={width}>
            <Container className={styles.authContainer}>
                <div className={styles.authDiv}>
                    <Text>Вход</Text>
                    <TextInput label='Логин' />
                    <PasswordInput label='Пароль' />
                    <Button>Вход</Button>
                </div>
            </Container>
        </Body>
    )
}

export default AuthenticationForm