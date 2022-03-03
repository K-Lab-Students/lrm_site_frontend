import React from 'react';

import { useState } from 'react';
import { AppShell, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';

import MyHeader from './components/header/header';
import MyNavbar from './components/header/navbar';

function App() {

  const [openedBurger, setOpenedBurger] = useState(false)

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      header={
        <MyHeader openedBurger={openedBurger} setOpenedBurger={setOpenedBurger}/>
      }
      navbar={
        <MyNavbar openedNavbar={openedBurger}/>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}

export default App;
