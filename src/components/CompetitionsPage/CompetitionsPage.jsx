import React, { useEffect, useState } from 'react'

import Body from '../Body/Body'
import Comptetition from './Competition'

import robotsDiagram from '../../pics/robotics.png'
import { useFetching } from '../../hooks/useFetching'
import CompetitionsService from '../../API/CompetitionsService'

const CompetitionsPage = ({ width }) => {

    // const competitions = [
    //     { id: 0, name: 'Электроника', body: 'Паять паять паять', img: 'https://st.focusedcollection.com/14026668/i/650/focused_479984668-stock-photo-young-man-tinkering-soldering-iron.jpg' },
    //     { id: 1, name: 'Программирование', body: 'Прогать прогать прогать', img: 'https://bestprogrammer.ru/wp-content/uploads/2020/10/Programmirovanie-i-kodirovanie.jpg' },
    //     { id: 2, name: 'Нейросети', body: 'Обучать обучать обучать', img: 'https://21mm.ru/upload/resize_cache/iblock/0b4/658_9999_1/0b42c53097f282fd22c643649c04e585.jpg' },
    //     { id: 3, name: 'Конструирование', body: 'Варить крутить клеить', img: 'https://img.freepik.com/free-photo/working-welder-welds-parts_143715-690.jpg' }
    // ]

    const [compets, setCompets] = useState([])

    const [fetchCompet, isLoading, error] = useFetching(async () => {
        const resp = await CompetitionsService.get()
        setCompets(resp)
    })

    useEffect(() => {
        fetchCompet()
    }, [])

    let iter = 0

    return (
        <Body width={width}>
            <center>
                <h1>Компетенции</h1>
                <img src={robotsDiagram} width={700} alt='robotics' />
            </center>

            {
                compets.map(competition =>
                    <Comptetition imageLeftPos={!(competition.id % 2)} competition={competition} key={iter++} />
                )
            }

        </Body>
    )
}

export default CompetitionsPage