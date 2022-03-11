import React from 'react'

import Body from '../Body/Body'

import styles from './AuthenticationFormStyle.module.css'

const AuthenticationForm = ({ width }) => {
    return (
        <Body width={width}>
            <center>
                <div style={{ verticalAlign: 'middle' }}>
                    Вход
                </div>
            </center>
        </Body>
    )
}

export default AuthenticationForm