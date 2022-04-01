import axios from "axios"

export default class ProjectsService {

    // static host = 'https://jsonplaceholder.typicode.com/posts'
    static host = 'http://192.168.1.95:8080/projects'
    // static format = '?format=json'
    static format = ''

    static async getProjects() {
        const response = await axios.get(this.host + this.format)
        return response.data.data
    }

    static async getProjectById(id) {
        const response = await axios.get(this.host + '/' + id)
        return [response.data.data]
    }

    static async addProjects(projects) {
        const response = await axios.post(this.host, projects)
    }

    static async updateProjectById(id, projects) {
        const response = await axios.put(this.host + '/' + id, projects)
    }

    static async deleteProjectById(id) {
        const response = await axios.delete(this.host + '/' + id)
    }
}