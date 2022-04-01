import React from 'react'

import { Text, TextInput, PasswordInput, Button, Container } from '@mantine/core'

import Body from '../Body/Body'

import styles from './ReginstrationPageStyle.module.css'

const ReginstrationPage = ({ width }) => {
    return (
        <Body width={width}>
            <Container className={styles.regContainer}>
                <div className={styles.regDiv}>
                    <Text>Регистрация</Text>
                    <TextInput label='Логин' />
                    <PasswordInput label='Пароль' />
                    <Button>Регистрация</Button>
                </div>
            </Container>
        </Body>
    )
}

export default ReginstrationPage