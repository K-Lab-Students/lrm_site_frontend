import axios from "axios"

export default class UsersService {

    // static host = 'https://jsonplaceholder.typicode.com/posts'
    static host = 'http://localhost:8080'

    static path = '/users'
    // static format = '?format=json'
    static format = ''

    static async get() {
        const response = await axios.get(this.host + this.path + this.format)
        return response.data.data
    }

    static async getById(id) {
        const response = await axios.get(this.host + this.path + '/' + id)
        return [response.data.data]
    }

    static async create(user) {
        const response = await axios.post(this.host + this.path, user)
    }

    static async updateById(id, user) {
        const response = await axios.put(this.host + this.path + '/' + id, user)
    }

    static async delete(id) {
        const response = await axios.delete(this.host + this.path + '/' + id)
    }
}