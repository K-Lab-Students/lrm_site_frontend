import React from 'react';

import { useState } from 'react';
import { AppShell, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      navbarOffsetBreakpoint="sm"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed

      header={
        <Header height={70} padding="md" color={theme.colors.blue[0]}>
          {/* Handle other responsive styles with MediaQuery component or createStyles function */}
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <img src="https://img.icons8.com/office/30/000000/brain.png"/>
          </div>
        </Header>
      }
      navbar={
        <Navbar
          padding="md"
          style={{border: '0 0'}}
          // Breakpoint at which navbar will be hidden if hidden prop is true
          hiddenBreakpoint="sm"
          // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
          hidden={!opened}
          // when viewport size is less than theme.breakpoints.sm navbar width is 100%
          // viewport size > theme.breakpoints.sm – width is 300px
          // viewport size > theme.breakpoints.lg – width is 400px
          width={{ sm: 300, lg: 300 }}
        >
          <Text>Application navbar</Text>
          <Navbar.Section> a </Navbar.Section>
        </Navbar>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}

function App() {
  return (
    <Demo />
  );
}

export default App;
