import React from 'react';

import { Header, MediaQuery, Burger, useMantineTheme, Container, Image, Button } from '@mantine/core';

import { ButtonNews, ButtonCompetentions, ButtonAbout, ButtonSingIn, ButtonProjects, ButtonSingUp, ButtonToLK } from '../HeaderButtons/HeaderButtons'

import { Link } from "react-router-dom";

import logoBlack from '../../pics/logoBlack.png'

const MyHeader = ({ openedMenu, setOpenedMenu, isLogined }) => {

    const theme = useMantineTheme()

    const stickyHeader = openedMenu ? {} : { position: 'sticky' }

    return (
        <Header height={70} padding="md" style={stickyHeader}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery smallerThan="sm" styles={{ paddingLeft: '10px !important' }}>
                    <Container size='sm' style={{ paddingLeft: 70, marginRight: 0, marginLeft: 0 }}>
                        <Link to='/' children={
                            <Image src={logoBlack} width={39} height={60} fit="contain" alt='k-lab logo' />
                        } />
                    </Container>
                </MediaQuery>

                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Container style={{ margin: 'auto' }}>
                        <Link to='/news' children={<ButtonNews />} />
                        <Link to='/competitions' children={<ButtonCompetentions />} />
                        <Link to='/projects' children={<ButtonProjects />} />
                        <Link to='/about' children={<ButtonAbout />} />
                    </Container>
                </MediaQuery>

                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Container style={{ marginRight: 0, width: 'auto', marginLeft: 0 }}>
                        {!isLogined
                            ? <>
                                <Link to='/sing-up' children={<ButtonSingUp style={{ margin: '10px !important' }} />} />
                                <Link to='/sign-in' children={<ButtonSingIn style={{ margin: '10px !important' }} />} />
                            </>
                            : <>
                                <Link to='/lk' children={<ButtonToLK style={{ margin: '10px !important' }} />} />
                                <Button variant='filled' type={'submit'} onClick={(e) => {
                                    localStorage.clear()
                                    window.location.replace('/')
                                }}>Выход</Button>
                            </>
                        }


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