import React from 'react';
import { useState } from 'react';
import { Navbar, MediaQuery, Button, Text, Divider } from '@mantine/core';

const MyNavbar = ({ openedNavbar }) => {

    return (
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Navbar padding="md" hidden={!openedNavbar} width={{}}>
                <Navbar.Section>
                    <Button variant='subtle'>
                        <Text>Новости</Text>
                    </Button>
                </Navbar.Section>

                <Navbar.Section>
                    <Button variant='subtle'>
                        <Text>Компетенции</Text>
                    </Button>
                </Navbar.Section>

                <Navbar.Section>
                    <Button variant='subtle'>
                        <Text>О нас</Text>
                    </Button>
                </Navbar.Section>

                <Divider />

                <Navbar.Section style={{ marginTop: 10 }}>
                    <Button>
                        <Text>Вход</Text>
                    </Button>
                </Navbar.Section>
            </Navbar>
        </MediaQuery>
    )
}

export default MyNavbar