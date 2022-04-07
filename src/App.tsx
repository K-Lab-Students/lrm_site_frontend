import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router } from "react-router-dom";

import MyHeader from './components/Header/MyHeader';
import LeftMenu from './components/LeftMenu/LeftMenu';
import PageBody from './components/PageBody/PageBody';
import useToken from './hooks/useToken';

const App = () => {
    const [openedMenu, setOpenedMenu] = useState(false)

    const [logined, setLogined] = useState(false)

    const [token] = useToken()



    useEffect(() => {
        console.log('check token');

        if (token) {
            console.log('token');

            // setLogined(true)
        }
    }, [])

    return (
        <Router>
            <MyHeader openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} isLogined={logined} />

            <LeftMenu openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} isLogined={logined} />

            <PageBody setIsLogined={setLogined} />
        </Router>
    );
}

export default App;
