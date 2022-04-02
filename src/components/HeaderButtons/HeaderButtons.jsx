import React from 'react'

import { Button, Text } from '@mantine/core'

const MyButton = ({ text, setState, buttonId, styles = {}, subtle = true }) => {
    return (
        <Button
            variant={subtle ? 'subtle' : 'filled'}
            style={styles}
        // onClick={() => setState(buttonId)}
        >
            <Text>{text}</Text>
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
            subtle={false}
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
            subtle={false}
        />
    )
}

export {
    ButtonNews,
    ButtonCompetentions,
    ButtonProjects,
    ButtonAbout,
    ButtonSingIn,
    ButtonSingUp
}