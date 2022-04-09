import { useState } from "react";

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    const getRole = () => {
        const roleString = localStorage.getItem('role')
        const userRole = JSON.parse(roleString)
        return userRole?.role
    }
    const getId = () => {
        const idString = localStorage.getItem('id')
        const userId = JSON.parse(idString)
        return userId?.id
    }

    const [token, setToken] = useState(getToken());
    const [role, setRole] = useState(getRole())
    const [id, setId] = useState(getId())

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken))
        setToken(userToken.token)
    }

    const saveRole = userRole => {
        localStorage.setItem('role', JSON.stringify(userRole))
        setRole(userRole.role)
    }

    const saveId = userId => {
        localStorage.setItem('id', JSON.stringify(userId))
        setId(userId.id)
    }

    return [token, saveToken, role, saveRole, id, saveId]
}