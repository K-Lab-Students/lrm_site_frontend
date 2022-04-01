import React from 'react'

import Body from '../Body/Body'
import Project from './Project'

const ProjectsPageGrid = ({ width }) => {

    const projects = [
        {
            id: 0, name: 'Innovation project', summary: 'Some project for make your life better', description: 'Nice really nice', photoUrls: [
                { id: 0, url: 'https://www.iqmac.ru/upload/resize_cache/iblock/a42/800_600_140cd750bba9870f18aada2478b24840a/1.jpg' },
                { id: 1, url: 'https://chudo.tech/wp-content/uploads/2020/04/BD-800x445.jpg' }
            ], complete: false
        },
        {
            id: 1, name: 'Another innovation project', summary: 'Also some project for make your life better', description: 'Nice really nice', photoUrls: [
                { id: 0, url: 'https://static.insales-cdn.com/images/products/1/2343/456902951/atlas2016-thumb_2x.jpeg' },
                { id: 1, url: 'http://kids.interclover.ru/wp-content/uploads/2020/03/UBTech.jpg' }
            ], complete: false
        }
    ]

    return (
        <Body width={width}>
            <center>
                <h1>Наши проекты</h1>
            </center>
            {
                projects.map(project =>
                    <Project imageLeftPos={project.id % 2} project={project} key={project.id} />
                )
            }
        </Body>
    )
}

export default ProjectsPageGrid