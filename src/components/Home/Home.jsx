import { Container, Grid, Image } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Body from '../Body/Body'

import logoBlack from '../../pics/logoBlack.png'

const Home = ({ width }) => {
    return (
        <Body width={width}>
            <Container>
                <Grid >
                    <Grid.Col xs={5} sm={4} md={3} style={{ margin: 'auto' }}>
                        <h1 style={{ margin: 'auto', width: 170 }}>
                            <div>
                                Будущее.
                            </div>
                            <div>
                                Иновации.
                            </div>
                            <div>
                                Роботы.
                            </div>
                        </h1>
                    </Grid.Col>
                    <Grid.Col xs={5} sm={4} md={3} style={{ margin: 'auto' }}>
                        <Image src={logoBlack} width={234} height={360} style={{ margin: 'auto', width: 234 }} fit="contain" alt='k-lab logo' />
                    </Grid.Col>
                </Grid>
            </Container>
            <h1>Использование технологий 21 века чтобы сделать мир лучше.</h1>
            <h1>В нашей команде трудятся <Link to='/about'>30 специалистов</Link> разных направленностей, и именно вы можете им стать.</h1>
            <h1>На нашей платформе вы можете связаться с нами для решения своих самых абициозных задач на базе лаборатории робототехники и мехатроники КубГУ,
                а так же узнать уже о готовых проектах, либо же принять участие в текущих.</h1>
            <h1>Присоединяйтесь к нашей команде, чтобы первыми ступить в технологичное будущее.</h1>
        </Body>
    )
}

export default Home