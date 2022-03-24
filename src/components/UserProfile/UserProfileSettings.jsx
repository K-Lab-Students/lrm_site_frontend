import React from 'react'

import { TextInput, Divider, MultiSelect } from '@mantine/core'


const UserProfileSettings = () => {
    return (
        <div>
            <h2 style={{ margin: 0 }}>Личные данные</h2>
            <Divider style={{marginBottom: 15, marginTop: 4}} />
            
            Фамилия
            <TextInput style={{ width: 500 }}></TextInput>
            Имя
            <TextInput style={{ width: 500 }}></TextInput>
            Отчество
            <TextInput style={{ width: 500 }}></TextInput>
            Дата рождения
            <TextInput type='date' style={{ width: 500 }}></TextInput>
            Место учебы
            <TextInput style={{ width: 500 }}></TextInput>
            Факультет
            <TextInput style={{ width: 500 }}></TextInput>
            Представляемые компетенции
            <MultiSelect 
                data={[
                    {value: '1', label: 'Электроника'},
                    {value: '2', label: 'Программирование микроконтроллеров'},
                    {value: '3', label: 'Нейросети'},
                ]}
            />
        </div>
    )
}

export default UserProfileSettings