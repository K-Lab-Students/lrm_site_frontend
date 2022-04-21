import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router } from "react-router-dom";

import { Global } from '@mantine/core';

import MyHeader from './components/Header/MyHeader';
import LeftMenu from './components/LeftMenu/LeftMenu';
import PageBody from './components/PageBody/PageBody';
import useToken from './hooks/useToken';

// import font from '../public/fonts/FiraCode-VariableFont_wght.ttf'

const App = () => {
    const [openedMenu, setOpenedMenu] = useState(false)

    const [logined, setLogined] = useState(false)

    const [token, saveToken, role, saveRole, id, saveId] = useToken()



    useEffect(() => {
        if (localStorage.getItem('token') != null) {
            setLogined(true)
        } else {
            setLogined(false)
        }
    }, [])

    return (
        <Router>
            {/* <div style={{
                fontFamily: "FiraCode-VariableFont"
            }}> */}
                <MyHeader openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} isLogined={logined} />

                <LeftMenu openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} isLogined={logined} />

                <PageBody isLogined={logined} setIsLogined={setLogined} />
            {/* </div> */}
        </Router>
    );
}

export default App;
