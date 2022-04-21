import React from 'react'

import { Button, Text } from '@mantine/core'

const MyButton = ({ text, setState, buttonId, styles = {}, subtle = true, onClick, color }) => {
    return (
        <Button
            variant={subtle ? 'subtle' : 'filled'}
            style={styles}
            onClick={onClick}
        >
            <Text color={color}>{text}</Text>
        </Button>
    )
}

const ButtonNews = ({ setState, style = {} }) => {
    const buttonId = 'news'
    return (
        <MyButton
            buttonId={buttonId}
            setState={setState}
            styles={style}
            text='Новости'
            color='black'
        />
    )
}

const ButtonProjects = ({ setState, style = {} }) => {
    const buttonId = 'projects'
    return (
        <MyButton
            buttonId={buttonId}
            setState={setState}
            styles={style}
            text='Проекты'
            color='black'
        />
    )
}

const ButtonCompetentions = ({ setState, style = {} }) => {
    const buttonId = 'competitions'
    return (
        <MyButton
            buttonId={buttonId}
            setState={setState}
            styles={style}
            text='Компетенции'
            color='black'
        />
    )
}

const ButtonAbout = ({ setState, style = {} }) => {
    const buttonId = 'about'
    return (
        <MyButton
            buttonId={buttonId}
            setState={setState}
            styles={style}
            text='О нас'
            color='black'
        />
    )
}

const ButtonAdmin = ({ setState, style = {} }) => {
    const buttonId = 'admin'
    return (
        <MyButton
            buttonId={buttonId}
            setState={setState}
            styles={style}
            text='Админка'
            color='black'
        />
    )
}

const ButtonSingIn = ({ setState, style = {} }) => {
    const buttonId = 'singin'
    return (
        <MyButton
            buttonId={buttonId}
            setState={setState}
            styles={style}
            text='Вход'
            color='black'
        />
    )
}

const ButtonSingUp = ({ setState, style = {} }) => {
    const buttonId = 'singup'
    return (
        <MyButton
            buttonId={buttonId}
            setState={setState}
            styles={style}
            text='Регистрация'
            color='black'
        />
    )
}

const ButtonToLK = ({ setState, style = {} }) => {
    const buttonId = 'tolk'
    return (
        <MyButton
            buttonId={buttonId}
            setState={setState}
            styles={style}
            text='Личный кабинет'
            color='#008B91'
        />
    )
}

const ButtonExit = ({ setState, style = {}, onClick }) => {
    const buttonId = 'exit'
    return (
        <MyButton
            buttonId={buttonId}
            setState={setState}
            styles={style}
            text='Выход'
            onClick={onClick}
            color='black'
        />
    )
}

export {
    ButtonNews,
    ButtonCompetentions,
    ButtonProjects,
    ButtonAbout,
    ButtonSingIn,
    ButtonSingUp,
    ButtonToLK,
    ButtonAdmin,
    ButtonExit
}