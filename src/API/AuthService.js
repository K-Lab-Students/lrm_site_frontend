import axios from "axios";

export default class AuthService {

    // static host = 'https://jsonplaceholder.typicode.com/posts'
    // static host = 'http://localhost:8080'
    static host = 'http://192.168.1.95:8080'
    // static format = '?format=json'
    static format = ''

    static async login({ login, password }) {
        const response = await axios.post(this.host + '/login', { body: { email: login, password: password } })
        return response.data.data
    }

    static async registration({ login, password }) {
        console.log(login, password);
        const response = await axios.post(this.host + '/register', { body: { email: login, password: password } })
        return response.data.data
    }
}