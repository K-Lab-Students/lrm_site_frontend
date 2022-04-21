import React from 'react'
import { Container, Grid, Image, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import Body from '../Body/Body'

import logoBlack from '../../pics/homepic.jpeg'
import styles from './Home.module.css'

const Home = ({ width }) => {
    return (
        <Body width={width}>
            <Grid columns={6}>
                <Grid.Col xs={5} sm={4} md={3}>
                    <Container className={styles.mainWritesContainer}>
                        <Text className={styles.mainFontStyle}>Будущее.</Text>
                        <Text className={styles.mainFontStyle}>Инновации.</Text>
                        <Text className={styles.mainFontStyle}>Роботы.</Text>
                    </Container>
                    <Container>
                        <Text className={styles.textFontStyle}>K-Lab — плаформа для решения ваших самых амбициозных задач
                            на базе лаборатории робототехники и мехатроники КубГУ. С её помощью вы всегда можете узнавать новости
                            об уже готовых проектах, принять участие в текущих разработках и оставаться на связи с нами.
                        </Text>
                        <Text className={styles.textFontStyle}>
                            В нашей команде трудятся 30 специалистов различных направленностей, присоединяйтесь и вы к технологичному будущему!
                        </Text>
                    </Container>
                </Grid.Col>
                <Grid.Col xs={5} sm={4} md={3}>
                    <img src={logoBlack} className={styles.imageStyle} />
                </Grid.Col>
            </Grid>
        </Body >
    )
}

export default Home