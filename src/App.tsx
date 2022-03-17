import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MyHeader from './components/Header/MyHeader';
import LeftMenu from './components/LeftMenu/LeftMenu';
import PageBody from './components/PageBody/PageBody';

import axios from 'axios'

const App = () => {
    const [openedMenu, setOpenedMenu] = useState(false);

    const [state, setState] = useState('')

    // let a = {}

    console.log('1')
    console.log(state)

    return (
        <Router>
            <MyHeader openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} />

            <LeftMenu openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} />

            <PageBody />
        </Router>
    );
}

export default App;
