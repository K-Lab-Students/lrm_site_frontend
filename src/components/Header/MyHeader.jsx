import React from 'react';

import { Header, MediaQuery, Burger, useMantineTheme, ActionIcon, Container, Text } from '@mantine/core';

import { HeaderButtonNews, HeaderButtonCompetentions, HeaderButtonAbout, HeaderButtonSingIn } from '../HeaderButtons/HeaderButtons'

const MyHeader = ({ openedMenu, setOpenedMenu, setMainButtonsStates }) => {

    const theme = useMantineTheme()

    const stickyHeader = openedMenu ? {} : { position: 'sticky' }

    return (
        <Header height={70} padding="md" style={stickyHeader}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Container size='sm' style={{ paddingLeft: 70, marginRight: 0, marginLeft: 0 }}>
                    <ActionIcon>
                        <img src="https://img.icons8.com/office/30/000000/brain.png" alt='k-lab logo' />
                    </ActionIcon>
                    <Text>K-Lab</Text>
                </Container>

                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        onClick={() => setOpenedMenu(true)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                        style={{ marginLeft: 50 }}
                    />
                </MediaQuery>

                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Container>
                        <HeaderButtonNews setState={setMainButtonsStates} />
                        <HeaderButtonCompetentions setState={setMainButtonsStates} />
                        <HeaderButtonAbout setState={setMainButtonsStates} />
                    </Container>
                </MediaQuery>

                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Container style={{ marginRight: 0 }}>
                        <HeaderButtonSingIn setState={setMainButtonsStates} />
                    </Container>
                </MediaQuery>
            </div>
        </Header>
    )
}

export default MyHeader