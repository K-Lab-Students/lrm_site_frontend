import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router } from "react-router-dom";

import MyHeader from './components/Header/MyHeader';
import LeftMenu from './components/LeftMenu/LeftMenu';
import PageBody from './components/PageBody/PageBody';
import useToken from './hooks/useToken';

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
            <MyHeader openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} isLogined={logined} />

            <LeftMenu openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} isLogined={logined} />

            <PageBody isLogined={logined} setIsLogined={setLogined} />
        </Router>
    );
}

export default App;
