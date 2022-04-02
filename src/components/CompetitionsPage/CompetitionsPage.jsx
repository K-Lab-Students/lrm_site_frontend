import React from 'react'

import Body from '../Body/Body'
import Comptetition from './Competition'

import robotsDiagram from '../../pics/robotics.png'

const CompetitionsPage = ({ width }) => {

    const competitions = [
        { id: 0, name: 'Электроника', body: 'Паять паять паять', img: 'https://st.focusedcollection.com/14026668/i/650/focused_479984668-stock-photo-young-man-tinkering-soldering-iron.jpg' },
        { id: 1, name: 'Программирование', body: 'Прогать прогать прогать', img: 'https://bestprogrammer.ru/wp-content/uploads/2020/10/Programmirovanie-i-kodirovanie.jpg' },
        { id: 2, name: 'Нейросети', body: 'Обучать обучать обучать', img: 'https://21mm.ru/upload/resize_cache/iblock/0b4/658_9999_1/0b42c53097f282fd22c643649c04e585.jpg' },
        { id: 3, name: 'Конструирование', body: 'Варить крутить клеить', img: 'https://img.freepik.com/free-photo/working-welder-welds-parts_143715-690.jpg' }
    ]

    return (
        <Body width={width}>
            <center>
                <h1>Компетенции</h1>
                <img src={robotsDiagram} width={700} alt='robotics' />
            </center>

            {
                competitions.map(competition =>
                    <Comptetition imageLeftPos={!(competition.id % 2)} competition={competition} key={competition.id} />
                )
            }

        </Body>
    )
}

export default CompetitionsPage