import axios from "axios"

export default class NewsService {

    // static host = 'https://jsonplaceholder.typicode.com/posts'
    static host = 'http://192.168.1.45:8000/news/'
    static format = '?format=json'

    static async getNews() {
        const response = await axios.get(this.host + this.format)
        return response.data
    }

    static async getNewsById(id) {
        const response = await axios.get(this.host + id + '/' + this.format)
        return [response.data]
    }

    static async addNews(post) {
        const response = await axios.post(this.host, post)
    }

    static async updateNewsById(id, post) {
        const response = await axios.put(this.host + id, post)
    }

    static async deleteNewsById(id) {
        const response = await axios.delete(this.host + id)
    }


}