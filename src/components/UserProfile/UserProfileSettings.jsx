import React from 'react'

import { TextInput, Divider, MultiSelect, Button, Select } from '@mantine/core'
import { useState } from 'react'
import { useEffect } from 'react'
import UsersService from '../../API/UsersService'
import { useFetching } from '../../hooks/useFetching'
import CompetitionsService from '../../API/CompetitionsService'
import StudyPlacesService from '../../API/StudyPlaceService'

import { Dropzone, DropzoneStatus, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import FacultiesService from '../../API/FacultiesService'

const UserProfileSettings = () => {

    const [sname, setSname] = useState('')
    const [name, setName] = useState('')
    const [pname, setPname] = useState('')
    const [date, setDate] = useState('')
    const [fac, setFac] = useState('')
    const [stPlase, setStPlace] = useState('')

    const [competitions, setCompetitions] = useState([])
    const [studyPlace, setStudyPlace] = useState([])
    const [faculty, setFaculty] = useState([])
    const [allCompet, setAllCompet] = useState([])

    const [image, setImage] = useState({})
    const [imageBase64, setImageBase64] = useState('')

    const [buttonClicked, setButtonClicked] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)

    const [fetchUsers, isLoading, error] = useFetching(async () => {
        const userInfo = await UsersService.getById()
        const competitionsList = await CompetitionsService.get()
        const studyPlaceList = await StudyPlacesService.get()
        const facultiesList = await FacultiesService.get()


        setSname(userInfo.sname)
        setName(userInfo.name)
        setPname(userInfo.pname)
        // setDate(userInfo.birthday)
        setFac(userInfo.faculty_name)
        // setStudyPlace(userInfo.study_place_name)

        let defaultCompetitionsArray = []
        for (let i = 0; i < userInfo.competitions.length; ++i) {
            defaultCompetitionsArray.push({
                value: userInfo.competitions[i].id,
                label: userInfo.competitions[i].name
            })
        }
        setCompetitions(defaultCompetitionsArray)

        let defaultStudyPlacesArray = []
        // console.log(defaultStudyPlacesArray);
        for (let i = 0; i < studyPlaceList.length; ++i) {
            defaultStudyPlacesArray.push({
                value: studyPlaceList[i].id,
                label: studyPlaceList[i].name
            })
        }
        setStudyPlace(defaultStudyPlacesArray)

        let defaultFacultiesArray = []
        for (let i = 0; i < facultiesList.length; ++i) {
            defaultFacultiesArray.push({
                value: facultiesList[i].id,
                label: facultiesList[i].name
            })
        }
        setFaculty(defaultFacultiesArray)

        let arrComp = []
        for (let i = 0; i < competitionsList.length; ++i) {
            arrComp.push({
                value: competitionsList[i].id,
                label: competitionsList[i].name
            })
        }
        setAllCompet(arrComp)
    })

    useEffect(() => {
        fetchUsers()
    }, [])



    const theme = useMantineTheme();

    const dropzoneChildren = (status, theme) => (
        <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
            <div>
                <Text size="xl" inline>
                    Drag images here or click to select files
                </Text>
                <Text size="sm" color="dimmed" inline mt={7}>
                    Attach as many files as you like, each file should not exceed 5mb
                </Text>
                <Text>{status.accepted}</Text>
            </div>
        </Group>
    );

    function getBase64(file) {
        var reader = new FileReader();
        try {
            reader.readAsDataURL(file);
            reader.onload = function () {
                setImageBase64(reader.result)
                console.log('here ' + imageBase64);
                console.log('end');
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        } catch (e) {
            console.log('fukc');
        }
    }

    const cb = () => {
        setButtonClicked(true)
        getBase64(image)
        setImageLoading(true)
    }

    let timerId = setInterval(() => {
        if (imageBase64 !== '') {
            setImageLoading(false)
            clearInterval(timerId)
        }
    }, 100)
    // setTimeout(() => { ; alert('stop'); }, 5000);

    const sendData = () => {
        const user = {
            id: 0,
            sname: sname,
            name: name,
            pname: pname,
            birthday: '2001-01-01',
            file: imageBase64,
            faculty_id: fac,
            study_place_id: stPlase

        }
        UsersService.update(user)
            .then((resp) => { })
            .catch(e => console.log(e))
    }

    return (
        <div>
            <Dropzone
                loading={imageLoading}
                onDrop={(files) => { console.log('accepted files', files); setImage(files[0]) }}
                onReject={(files) => console.log('rejected files', files)}
                maxSize={3 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                multiple={false}
            >
                {(status) => dropzoneChildren(status, theme)}
            </Dropzone>

            <Button onClick={cb}>Загрузить фотографию</Button>


            <h2 style={{ margin: 0 }}>Личные данные</h2>
            <Divider style={{ marginBottom: 15, marginTop: 4 }} />

            Фамилия
            <TextInput style={{ width: 500 }} placeholder={sname} onChange={e => setSname(e.target.value)}></TextInput>
            Имя
            <TextInput style={{ width: 500 }} placeholder={name} onChange={e => setName(e.target.value)}></TextInput>
            Отчество
            <TextInput style={{ width: 500 }} placeholder={pname} onChange={e => setPname(e.target.value)}></TextInput>
            {/* Дата рождения
            <TextInput type='date' style={{ width: 500 }} placeholder={date} onChange={setDate}></TextInput> */}
            Факультет
            <Select style={{ width: 500 }} data={faculty} value={fac} onChange={setFac}></Select>
            Место учебы
            <Select style={{ width: 500 }} data={studyPlace} value={studyPlace} onChange={setStPlace}></Select>
            Представляемые компетенции
            <MultiSelect
                data={allCompet}
                defaultValue={competitions}
            />
            <Button onClick={sendData}>Изменить данные</Button>
        </div>
    )
}

export default UserProfileSettings