import axios from "axios";

export default class AuthService {

    // static host = 'https://jsonplaceholder.typicode.com/posts'
    static host = 'http://localhost:8080'
    static path = '/news'
    // static format = '?format=json'
    static format = ''

    static async login({ login, password }) {
        const response = await axios.post(this.host + this.path + this.format)
        return response.data.data
    }

    static async registration({ login, password }) {
        const response = await axios.post(this.host + this.path + '/')
        return [response.data.data]
    }
}