import React from 'react'

import { Button, Text } from '@mantine/core'

const MyButton = ({ text, setState, buttonId, styles = {}, subtle = true }) => {
    return (
        <Button
            variant={subtle ? 'subtle' : 'filled'}
            styles={styles}
            onClick={setState(buttonId)}
        >
            <Text>{text}</Text>
        </Button>
    )
}

const HeaderButtonNews = ({ setState, style = {} }) => {
    const buttonId = 1
    return (
        <MyButton
            buttonId={buttonId}
            setState={setState}
            styles={style}
            text='Новости'
        />
    )
}

const HeaderButtonCompetentions = ({ setState, style = {} }) => {
    const buttonId = 2
    return (
        <MyButton
            buttonId={buttonId}
            setState={setState}
            styles={style}
            text='Компетенции'
        />
    )
}

const HeaderButtonAbout = ({ setState, style = {} }) => {
    const buttonId = 3
    return (
        <MyButton
            buttonId={buttonId}
            setState={setState}
            styles={style}
            text='О нас'
        />
    )
}

const HeaderButtonSingIn = ({ setState, style = {} }) => {
    const buttonId = 4
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

export {
    HeaderButtonNews,
    HeaderButtonCompetentions,
    HeaderButtonAbout,
    HeaderButtonSingIn
}