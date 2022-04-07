import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar, MediaQuery, Divider } from '@mantine/core';

import { ButtonNews, ButtonCompetentions, ButtonAbout, ButtonSingIn, ButtonProjects, ButtonSingUp, ButtonToLK } from '../HeaderButtons/HeaderButtons';

const MyNavbar = ({ openedNavbar, setMainButtonsStates, isLogined }) => {

    return (
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Navbar padding="md" hidden={!openedNavbar}>

                {!isLogined
                    ?
                    <>
                        <Navbar.Section style={{ marginTop: 10 }}>
                            <Link to='/sing-up' children={<ButtonSingUp setState={setMainButtonsStates} />} />
                        </Navbar.Section>

                        <Navbar.Section style={{ marginTop: 10, marginBottom: 10 }}>
                            <Link to='/sign-in' children={<ButtonSingIn setState={setMainButtonsStates} />} />
                        </Navbar.Section>
                    </>
                    :
                    <Navbar.Section style={{ marginTop: 10, marginBottom: 10 }}>
                        <Link to='/lk' children={<ButtonToLK setState={setMainButtonsStates} />} />
                    </Navbar.Section>
                }

                <Divider />

                <Navbar.Section>
                    <Link to='/news' children={<ButtonNews style={{ marginTop: 10 }} setState={setMainButtonsStates} />} />
                </Navbar.Section>

                <Navbar.Section>
                    <Link to='/competitions' children={<ButtonCompetentions setState={setMainButtonsStates} />} />
                </Navbar.Section>

                <Navbar.Section>
                    <Link to='/projects' children={<ButtonProjects setState={setMainButtonsStates} />} />
                </Navbar.Section>

                <Navbar.Section>
                    <Link to='/about' children={<ButtonAbout setState={setMainButtonsStates} />} />
                </Navbar.Section>

            </Navbar>
        </MediaQuery>
    )
}

export default MyNavbar