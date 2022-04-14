import React from 'react'

import { TextInput, Divider, MultiSelect, Button, Select, Avatar } from '@mantine/core'
import { useState } from 'react'
import { useEffect } from 'react'
import UsersService from '../../API/UsersService'
import { useFetching } from '../../hooks/useFetching'
import CompetitionsService from '../../API/CompetitionsService'
import StudyPlacesService from '../../API/StudyPlaceService'

import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import FacultiesService from '../../API/FacultiesService'

const UserProfileSettings = () => {

    const [sname, setSname] = useState('')
    const [name, setName] = useState('')
    const [pname, setPname] = useState('')

    // const [date, setDate] = useState('')

    const [userFaculty, setUserFaculty] = useState(0)
    const [userStudyPlace, setUserStudyPlace] = useState(0)

    const [defaultCompetitionsList, setDefaultCompetitionsList] = useState([])
    const [defaultStudyPlaceValue, setDefaultStudyPlaceValue] = useState('')
    const [defaultFacultyValue, setDefaultFacultyValue] = useState('')

    const [studyPlaceList, setStudyPlaceList] = useState([])
    const [facultyList, setFacultyList] = useState([])
    const [competitionsList, setCompetitionsList] = useState([])

    const [image, setImage] = useState({})
    const [imageBase64, setImageBase64] = useState('')

    const [imageLoading, setImageLoading] = useState(false)

    const convertResponseToForm = (respList, setFunction) => {
        let defaultArray = []
        respList.forEach(item => {
            defaultArray.push({
                value: item.id,
                label: item.name
            })
        })
        setFunction(defaultArray)
    }

    const convertCompetitionsToForm = (respList) => {
        return respList.slice(1, respList.length - 1).split(',').map(value => parseInt(value))
    }

    const [fetchUsers, isLoading, error] = useFetching(async () => {
        const userInfo = await UsersService.getById()
        const competitionsResponce = await CompetitionsService.get()
        const studyPlaceResponce = await StudyPlacesService.get()
        const facultiesResponce = await FacultiesService.get()

        setSname(userInfo.sname)
        setName(userInfo.name)
        setPname(userInfo.pname)

        setUserFaculty(userInfo.faculty_id)
        setUserStudyPlace(userInfo.study_place_id)

        convertResponseToForm(studyPlaceResponce, setStudyPlaceList)
        convertResponseToForm(facultiesResponce, setFacultyList)
        convertResponseToForm(competitionsResponce, setCompetitionsList)

        setDefaultFacultyValue(userInfo.faculty_name)
        setDefaultStudyPlaceValue(userInfo.study_place_name)
        setDefaultCompetitionsList(convertCompetitionsToForm(userInfo.competitions_id))
    })

    useEffect(() => {
        fetchUsers()
    }, [])

    const dropzoneChildren = (status) => (
        <Avatar size={150} radius={150} alt='user-avatar' src={imageBase64}>U-M</Avatar>
    );

    function getBase64(file) {
        var reader = new FileReader();
        try {
            reader.readAsDataURL(file);
            reader.onloadstart = function () {
                setImageLoading(true)
            }
            reader.onloadend = function () {
                setImageLoading(false)
                setImageBase64(reader.result)
            }
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        } catch (e) {
            console.log('fukc');
        }
    }

    const sendData = () => {
        let compstring = '{' + defaultCompetitionsList.map(c => `${c}`) + '}'
        const user = {
            id: 0,
            sname: sname,
            name: name,
            pname: pname,
            birthday: '2001-01-01',
            file: imageBase64,
            faculty_id: parseInt(userFaculty),
            study_place_id: parseInt(userStudyPlace),
            competitions_id: compstring
        }
        console.log(user);
        UsersService.update(user)
            .then((resp) => { })
            .catch(e => console.log(e))
        window.location.reload()
    }

    return (
        <div>
            <h2>Изменения фотографии профиля</h2>
            <Divider style={{ marginBottom: 15, marginTop: 4 }} />
            
            <Dropzone
                loading={imageLoading}
                onDrop={(files) => { console.log('accepted files', files); setImage(files[0]) }}
                onReject={(files) => console.log('rejected files', files)}
                maxSize={10 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                multiple={false}
            >
                {(status) => dropzoneChildren(status)}
            </Dropzone>

            <Button onClick={() => getBase64(image)}>Загрузить фотографию</Button>


            <h2 style={{ margin: 0 }}>Личные данные</h2>
            <Divider style={{ marginBottom: 15, marginTop: 4 }} />

            <TextInput
                label={'Фамилия'}
                style={{ width: 500 }}
                placeholder={sname}
                onChange={e => setSname(e.target.value)}
            />
            <TextInput
                label={'Имя'}
                style={{ width: 500 }}
                placeholder={name}
                onChange={e => setName(e.target.value)}
            />
            <TextInput
                label={'Отчество'}
                style={{ width: 500 }}
                placeholder={pname}
                onChange={e => setPname(e.target.value)}
            />
            {/* Дата рождения
            <TextInput type='date' style={{ width: 500 }} placeholder={date} onChange={setDate}></TextInput> */}
            <Select
                label={'Факультет'}
                style={{ width: 500 }}
                data={facultyList}
                placeholder={defaultFacultyValue}
                value={userFaculty}
                onChange={e => { setUserFaculty(e); }}
            />
            <Select
                label={'Место учебы'}
                style={{ width: 500 }}
                data={studyPlaceList}
                placeholder={defaultStudyPlaceValue}
                value={userStudyPlace}
                onChange={e => { setUserStudyPlace(e); }}
            />
            <MultiSelect
                label={'Представляемые компетенции'}
                data={competitionsList}
                value={defaultCompetitionsList}
                onChange={setDefaultCompetitionsList}
            />
            <Button onClick={sendData}>Изменить данные</Button>
        </div>
    )
}

export default UserProfileSettings