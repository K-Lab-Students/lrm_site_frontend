import { Header, MediaQuery, Burger, Button, useMantineTheme, ActionIcon, Container, Text } from '@mantine/core';

const MyHeader = ({ setOpenedMenu }) => {

    const theme = useMantineTheme()

    return (
        <Header height={70} padding="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Container size='sm' style={{ paddingLeft: 70, marginRight: 0, marginLeft: 0 }}>
                    <ActionIcon>
                        <img src="https://img.icons8.com/office/30/000000/brain.png" alt='k-lab logo' />
                    </ActionIcon>
                    <Text>K-Lab</Text>
                </Container>

                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        onClick={() => setOpenedMenu(true)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                        style={{ marginLeft: 50 }}
                    />
                </MediaQuery>

                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Container>
                        <Button variant='subtle'>
                            <Text>Новости</Text>
                        </Button>
                        <Button variant='subtle'>
                            <Text>Компетенции</Text>
                        </Button>
                        <Button variant='subtle'>
                            <Text>О нас</Text>
                        </Button>
                    </Container>
                </MediaQuery>

                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Container style={{ marginRight: 0 }}>
                        <Button>
                            <Text>Вход</Text>
                        </Button>
                    </Container>
                </MediaQuery>
            </div>
        </Header>
    )
}

export default MyHeader