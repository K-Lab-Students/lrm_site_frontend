import React, { useState } from 'react';

import { AppShell } from '@mantine/core';

import MyHeader from './components/Header/MyHeader';
import LeftMenu from './components/LeftMenu/LeftMenu';
import MainBody from './components/MainBody/MainBody';

const App = () => {

    const [openedMenu, setOpenedMenu] = useState(false);
    const [mainButtonsStates, setMainButtonsStates] = useState(0);

    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            fixed
            header={
                <MyHeader setMainButtonsStates={setMainButtonsStates} openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} />
            }
            styles={{ main: { padding: 0 }, body: { padding: 0 } }}
        >
            <LeftMenu openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} setMainButtonsStates={setMainButtonsStates}/>

            <MainBody />

        </AppShell>
    );
}

export default App;
