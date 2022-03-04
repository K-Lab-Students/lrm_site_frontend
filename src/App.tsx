import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AppShell, Container, Text, useMantineTheme, Group, Modal, Button, Grid } from '@mantine/core';

import MyHeader from './components/Header/MyHeader';
import LeftMenu from './components/leftMenu/LeftMenu';
import MainBody from './components/MainBody/MainBody';

function App() {

	const [openedMenu, setOpenedMenu] = useState(false);

	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			fixed
			header={
				<MyHeader setOpenedMenu={setOpenedMenu} />
			}
		>
			<LeftMenu openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} />

			<MainBody />
		</AppShell>
	);
}

export default App;
