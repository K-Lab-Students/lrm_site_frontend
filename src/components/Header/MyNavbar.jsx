import { Navbar, MediaQuery, Button, Text, Divider } from '@mantine/core';

import { HeaderButtonNews, HeaderButtonCompetentions, HeaderButtonAbout, HeaderButtonSingIn } from '../HeaderButtons/HeaderButtons';

const MyNavbar = ({ openedNavbar, setMainButtonsStates }) => {

    return (
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Navbar padding="md" hidden={!openedNavbar}>
                <Navbar.Section>
                    <HeaderButtonNews style={{ marginTop: 10 }} setState={setMainButtonsStates} />
                </Navbar.Section>

                <Navbar.Section>
                    <HeaderButtonCompetentions setState={setMainButtonsStates} />
                </Navbar.Section>

                <Navbar.Section>
                    <HeaderButtonAbout setState={setMainButtonsStates} />
                </Navbar.Section>

                <Divider />

                <Navbar.Section style={{ marginTop: 10 }}>
                    <HeaderButtonSingIn setState={setMainButtonsStates} />
                </Navbar.Section>
            </Navbar>
        </MediaQuery>
    )
}

export default MyNavbar