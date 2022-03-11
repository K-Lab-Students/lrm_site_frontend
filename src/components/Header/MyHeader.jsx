import React from 'react';

import { Header, MediaQuery, Burger, useMantineTheme, ActionIcon, Container, Text } from '@mantine/core';

import { ButtonNews, ButtonCompetentions, ButtonAbout, ButtonSingIn } from '../HeaderButtons/HeaderButtons'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MyHeader = ({ openedMenu, setOpenedMenu }) => {

    const theme = useMantineTheme()

    const stickyHeader = openedMenu ? {} : { position: 'sticky' }

    return (
        <Header height={70} padding="md" style={stickyHeader}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery smallerThan="sm" styles={{ paddingLeft: '10px !important' }}>
                    <Container size='sm' style={{ paddingLeft: 70, marginRight: 0, marginLeft: 0 }}>
                        {/* <ActionIcon> */}
                        <img src="https://img.icons8.com/office/30/000000/brain.png" alt='k-lab logo' />
                        {/* </ActionIcon> */}
                        <Text>K-Lab</Text>
                    </Container>
                </MediaQuery>

                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Container style={{ margin: 'auto' }}>
                        <Link to='/news' children={<ButtonNews />} />
                        <Link to='/competitions' children={<ButtonCompetentions />} />
                        <Link to='/about' children={<ButtonAbout />} />
                    </Container>
                </MediaQuery>

                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Container style={{ marginRight: 0, width: 'auto', marginLeft: 0 }}>
                        <Link to='/sing-in' children={<ButtonSingIn />} />
                    </Container>
                </MediaQuery>

                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        onClick={() => setOpenedMenu(true)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                        style={{ marginLeft: 'auto', marginRight: 0 }}
                    />
                </MediaQuery>

            </div>
        </Header>
    )
}

export default MyHeader