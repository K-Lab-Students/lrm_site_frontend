import React from 'react'
import { Container, Grid, Image } from '@mantine/core'
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
                                Инновации.
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
            <h1>Используем технологий 21 века чтобы сделать мир лучше.</h1>
            <h1>В нашей команде трудятся <Link to='/about'>30 специалистов</Link> различных направленностей и именно вы можете стать одним из них.</h1>
            <h1>На нашей платформе вы можете связаться с нами для решения своих самых абициозных задач на базе лаборатории робототехники и мехатроники КубГУ,
                узнать уже о готовых проектах, либо же принять участие в текущих разработках.</h1>
            <h1>Присоединяйтесь к нашей команде, чтобы первыми ступить в технологичное будущее.</h1>
        </Body>
    )
}

export default Home