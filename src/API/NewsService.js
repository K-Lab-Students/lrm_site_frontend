import axios from "axios"

export default class NewsService {

    // static host = 'https://jsonplaceholder.typicode.com/posts'
    static host = 'http://localhost:8080'
    static path = '/news'
    // static format = '?format=json'
    static format = ''

    static async getNews() {
        const response = await axios.get(this.host + this.path + this.format)
        return response.data.data
    }

    static async getNewsById(id) {
        const response = await axios.get(this.host + this.path + '/' + id)
        return [response.data.data]
    }

    static async addNews(post) {
        const response = await axios.post(this.host + this.path, post)
    }

    static async updateNewsById(id, post) {
        const response = await axios.put(this.host + this.path + '/' + id, post)
    }

    static async deleteNewsById(id) {
        const response = await axios.delete(this.host + this.path + '/' + id)
    }
}